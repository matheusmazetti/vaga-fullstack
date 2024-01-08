package com.catalogo.leite.controller

import com.catalogo.leite.models.leite
import com.catalogo.leite.repository.LeiteRepository
import jakarta.websocket.server.PathParam
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class LeiteController(@Autowired val leiteRepo: LeiteRepository) {

    //Função para enviar todos os itens da tabela
    @GetMapping("/getall")
    fun getAllLeites() : List<leite>?{
        //Retorna a lista de todos os itens na tabela
        return  leiteRepo.findAll().toList()
    }

    //Função para criar um novo registro na tabela
    @PostMapping("/create")
    fun createLeite(@RequestBody leite: leite) : ResponseEntity<leite> {
        //Salva o novo item na tabela
        val newLeite = leiteRepo.save(leite)
        //Retorna o novo item criado e o status de item criado
        return ResponseEntity(newLeite, HttpStatus.CREATED)
    }

    //Função para deletar um item da tabela
    @PostMapping("/delete/{id}")
    fun deleteLeite(@PathVariable("id") id: Long) : ResponseEntity<HttpStatus> {

        //Checa se o item existe na tabela
        if(!leiteRepo.existsById(id)) {
            //Retorna erro de não encontrado caso o item nã seja encontrado na tabela
            return ResponseEntity(HttpStatus.NOT_FOUND)
        }

        //Apaga o item da tabela
        leiteRepo.deleteById(id)
        //Retorna status no content após o item ser excluido da tabela
        return ResponseEntity(HttpStatus.NO_CONTENT)

    }

    //Função para atualizar item na tabela
    @PostMapping("/update/{id}")
    fun updateLeite(@PathVariable("id") id: Long, @RequestBody newLeite: leite) : ResponseEntity<leite> {
        //Checa a existencia do item na tabela, caso não exista retorna status de não encontrado
        val oldLeite = leiteRepo.findByIdOrNull(id)?: return ResponseEntity(HttpStatus.NOT_FOUND)

        //Atualizando as informações do item
        val updatedLeite = oldLeite.copy(name = newLeite.name, ean = newLeite.ean)
        //Salvando o item atualizado na tabela
        leiteRepo.save(updatedLeite)
        //Após salvar o item, retorna o item atualizado e o status ok
        return ResponseEntity(updatedLeite, HttpStatus.OK)
    }

    //Função para pesquisar itens
    @GetMapping("/get")
    fun getItems(@RequestParam("query") query: String) : List<leite>? {
        val items = leiteRepo.getSearchResults(query)
        return items
    }

}