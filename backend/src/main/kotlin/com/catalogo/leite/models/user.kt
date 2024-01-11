package com.catalogo.leite.models

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull

@Entity
@Table(name = "Users")
data class user(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long,

    @NotNull(message = "A coluna email não pode ser nula")
    @Column(unique = true, nullable = false)
    var email : String,

    @NotNull(message = "A coluna senha não pode ser nula")
    @Column(nullable = false)
    var senha : String

)
