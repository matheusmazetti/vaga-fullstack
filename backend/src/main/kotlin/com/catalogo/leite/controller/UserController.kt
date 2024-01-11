package com.catalogo.leite.controller

import com.catalogo.leite.models.user
import com.catalogo.leite.repository.UserRepository
import jakarta.validation.Valid
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/user")
class UserController (@Autowired val userRepository: UserRepository){

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/login")
    fun login(@Valid @RequestBody user: user) :ResponseEntity<HttpStatus> {
        //checa se o usuário existe
        val serverUser = userRepository.findByEmail(user.email) ?: return ResponseEntity(HttpStatus.NOT_FOUND)
        // compara as senhas
        if(serverUser.senha != user.senha) {
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }

        return ResponseEntity(HttpStatus.OK)

    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/signup")
    fun singup(@Valid @RequestBody user: user) : ResponseEntity<HttpStatus> {
        //checa se o email já foi utilizado
        if(userRepository.existsByEmail(user.email)){
            return ResponseEntity(HttpStatus.CONFLICT)
        }

        userRepository.save(user)
        return ResponseEntity(HttpStatus.CREATED)
    }
}