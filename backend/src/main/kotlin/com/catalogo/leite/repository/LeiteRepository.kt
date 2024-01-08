package com.catalogo.leite.repository

import com.catalogo.leite.models.leite
import jakarta.persistence.EntityManager
import jakarta.persistence.PersistenceContext
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface LeiteRepository : JpaRepository<leite, Long> {

    @Query("SELECT l FROM leite l WHERE l.name LIKE %:query% OR l.ean LIKE %:query%")
    fun getSearchResults(@Param("query") query: String) : List<leite>
}