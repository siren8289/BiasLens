package com.biaslens.health

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Schema(description = "헬스 체크 응답")
data class HealthResponse(
    @Schema(description = "상태", example = "OK") val status: String = "OK"
)

@Tag(name = "health", description = "서버 상태 확인")
@RestController
class HealthController {

    @Operation(summary = "헬스 체크", description = "서버 동작 여부를 확인합니다.")
    @ApiResponses(
        ApiResponse(responseCode = "200", description = "정상", content = [Content(schema = Schema(implementation = HealthResponse::class))])
    )
    @GetMapping("/health")
    fun health(): HealthResponse = HealthResponse()
}

