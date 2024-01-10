package com.catalogo.leite.models

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull

@Entity
@Table(name = "Leites")
data class leite(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long,

    @NotNull(message = "A coluna name não pode ser nula")
    @Column(nullable = false)
    var name : String,

    @NotNull(message = "A coluna ean não pode ser nula")
    @Column(unique = true, nullable = false)
    var ean : String
)
