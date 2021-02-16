package io.geo.geo_game.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.geo.geo_game.domain.City;
import io.geo.geo_game.repositories.CityRepository;




@Controller
@RestController
@RequestMapping(value="/api")
public class CityController {
	@Autowired
	CityRepository cityRepository;
	
	@GetMapping(value="/cities/{id}")
	public Optional<City> getCity(@PathVariable int id){
		return cityRepository.findById(id);
	}

}
