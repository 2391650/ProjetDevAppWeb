package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Prof;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfRepository extends JpaRepository<Prof, Long> {
    Prof findByUsername(String username);
}