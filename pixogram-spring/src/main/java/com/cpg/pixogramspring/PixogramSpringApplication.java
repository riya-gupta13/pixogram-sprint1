package com.cpg.pixogramspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan
@EnableSwagger2
public class PixogramSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(PixogramSpringApplication.class, args);
	}

	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
				.apis(RequestHandlerSelectors.basePackage("com.cpg")).paths(PathSelectors.ant("/api/**")).build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("PIXOGRAM APP API")
				.description("This API can be used to upload images and videos and also to create your own profile")
				.build();
	}
}
