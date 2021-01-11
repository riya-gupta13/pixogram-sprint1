package com.cpg.pixogramspring.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
/**
 * To check if a user wants to follow another user if, he/she is a user or not
 *
 */
public class NotAUserException extends RuntimeException {
	
	public NotAUserException(String message) {
		super(message);
	}

}
