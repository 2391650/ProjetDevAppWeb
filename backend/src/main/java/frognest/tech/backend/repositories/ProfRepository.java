package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Prof;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfRepository extends JpaRepository<Prof, Long> {
    Prof findByFirstname(String firstname);
}