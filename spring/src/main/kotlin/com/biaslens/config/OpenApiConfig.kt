package com.biaslens.config

import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Info
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class OpenApiConfig {

    @Bean
    fun biaslensOpenAPI(): OpenAPI = OpenAPI().info(
        Info()
            .title("BiasLens API")
            .version("0.0.1")
            .description("BiasLens 백엔드 REST API. 뉴스 표현 분석·비교 서비스에 필요한 엔드포인트를 제공합니다.")
    )
}
