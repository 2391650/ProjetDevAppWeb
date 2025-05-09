package frognest.tech.backend.repositories;

import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.model.Prof;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface GroupeRepository extends JpaRepository<Groupe, Long> {
    Groupe findAllByIdgroup(Long idGroupe);

    boolean existsByNomGroupe(String nomGroupe);

    List<Groupe> findAllByProf(Prof prof);
}