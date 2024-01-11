package com.catalogo.leite.repository

import com.catalogo.leite.models.user
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<user, Long> {

    fun existsByEmail(email : String) : Boolean

    fun findByEmail(email: String) : user?

}