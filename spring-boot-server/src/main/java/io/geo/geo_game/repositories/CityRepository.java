package io.geo.geo_game.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.geo.geo_game.domain.City;

@Repository
public interface CityRepository extends JpaRepository<City,Integer>{

}
