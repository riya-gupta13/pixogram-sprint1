package com.cpg.pixogramspring.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
/**
 * To check if the user is already existing or not
 *
 */
public class AlreadyExistsException extends RuntimeException{

	public AlreadyExistsException(String message) {
		super(message);

	}

}
