package io.geo.geo_game.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


public class PartDto {
	
	 @NotNull( message = "Please enter a score")
	private float score;
	
	
	public PartDto() {
	
	}

	public float getScore() {
		return score;
	}
	
	public void setScore(float score) {
		this.score = score;
	}

}
