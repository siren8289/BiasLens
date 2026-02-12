package com.biaslens.health

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

data class HealthResponse(
    val status: String = "OK"
)

@RestController
class HealthController {

    @GetMapping("/health")
    fun health(): HealthResponse = HealthResponse()
}

