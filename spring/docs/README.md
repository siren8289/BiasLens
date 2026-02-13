# BiasLens API 문서

## OpenAPI 명세

- **파일**: [openapi.yaml](./openapi.yaml) (OpenAPI 3.0.3)
- 엔드포인트, 스키마, 태그 등이 정의되어 있습니다.

## Swagger UI

애플리케이션 실행 후 브라우저에서 다음 주소로 접속하면 됩니다.

| URL | 설명 |
|-----|------|
| http://localhost:8080/swagger-ui.html | Swagger UI (대시보드) |
| http://localhost:8080/v3/api-docs | OpenAPI JSON (자동 생성) |

```bash
cd spring
./gradlew bootRun
```

이후 http://localhost:8080/swagger-ui.html 에서 API를 탐색·테스트할 수 있습니다.
