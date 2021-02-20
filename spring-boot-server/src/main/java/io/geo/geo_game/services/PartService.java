package io.geo.geo_game.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.geo.geo_game.domain.Part;
import io.geo.geo_game.domain.User;
import io.geo.geo_game.dto.PartDto;
import io.geo.geo_game.repositories.PartRepository;
import io.geo.geo_game.repositories.UserRepository;

@Service
public class PartService {

	@Autowired 
	PartRepository partReprsitory;
	
	@Autowired
	UserRepository userReposittory;
	
	public Part savePart(PartDto partDto,String username) 
	{
		User user = userReposittory.findByUsername(username);
		Part part=new Part();
		part.setUser(user);
		part.setScore(partDto.getScore());
		Part p= partReprsitory.save(part);
		return p;
	}
	
}
