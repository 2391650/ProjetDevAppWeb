package frognest.tech.backend.service;

import frognest.tech.backend.model.Activite;
import frognest.tech.backend.repositories.ActiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActiviteService {

    @Autowired
    private ActiviteRepository activiteRepository;

    public Activite createActivity(Activite activite) {
        return activiteRepository.save(activite);
    }

    public List<Activite> getAll() {
        return activiteRepository.findAll();
    }

    public List<Activite> getActivitesByEleve(Long ideleve) {
        return activiteRepository.findByEleve_Ideleve(ideleve);
    }
}