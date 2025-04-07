package frognest.tech.backend.repositories;


import frognest.tech.backend.model.Activite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActiviteRepository extends JpaRepository<Activite, Long> {
}
