package com.catalogo.leite.models

import jakarta.persistence.*

@Entity
@Table(name = "Leites")
data class leite(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long,
    var name : String,
    var ean : String
)
