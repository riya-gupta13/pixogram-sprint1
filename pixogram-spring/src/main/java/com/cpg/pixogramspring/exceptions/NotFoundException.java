package com.cpg.pixogramspring.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
/**
 * To check whether the the data entered by user exists or not
 *
 */
public class NotFoundException extends RuntimeException{

	public NotFoundException(String message) {
		super(message);
	
	}
	

}
