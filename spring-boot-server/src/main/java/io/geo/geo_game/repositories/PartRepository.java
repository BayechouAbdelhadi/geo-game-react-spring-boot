package io.geo.geo_game.repositories;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.geo.geo_game.domain.Part;

@Repository
public interface  PartRepository extends JpaRepository<Part,Long> {
Part save(Part part);
Set<Part> findByUser_Username(String username);
}
