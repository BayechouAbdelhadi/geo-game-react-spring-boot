package io.geo.geo_game.web;
import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import io.geo.geo_game.domain.Part ;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.geo.geo_game.dto.PartDto;
import io.geo.geo_game.repositories.CityRepository;
import io.geo.geo_game.repositories.PartRepository;
import io.geo.geo_game.services.MapValidationErrorService;
import io.geo.geo_game.services.PartService;

@Controller
@RestController
@RequestMapping(value="/api")
public class PartController {
	
	@Autowired
	PartService partService;
	
	@Autowired
	PartRepository partRepository;
	
	@Autowired
    private MapValidationErrorService mapValidationErrorService;
	
	@PostMapping(value="/parts")
	  public ResponseEntity<?> createNewProject(@Valid @RequestBody PartDto part, BindingResult result, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;
        
        Part part1 =  partService.savePart(part, principal.getName());
        return new ResponseEntity<Part>(part1, HttpStatus.CREATED);
    }
	
	@GetMapping(value="/parts")
	  public ResponseEntity<?> findAllParts(Principal principal){
		
		 Set<Part >partS =  partRepository.findByUser_Username(principal.getName());
	   //List<Part >partS = partRepository.findAll();

      return new ResponseEntity<Set<Part >>(partS, HttpStatus.CREATED);
  }


}
