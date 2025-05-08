package frognest.tech.backend.service;

import frognest.tech.backend.model.GroupDTO;
import frognest.tech.backend.model.Groupe;
import frognest.tech.backend.model.Prof;
import frognest.tech.backend.repositories.GroupeRepository;
import frognest.tech.backend.repositories.EleveRepository;
import frognest.tech.backend.model.Eleve;
import frognest.tech.backend.repositories.ProfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupeService {

    @Autowired
    private GroupeRepository groupeRepository;

    @Autowired
    private EleveRepository eleveRepository;

    @Autowired
    private ProfRepository profRepository;

    public boolean createGroup(GroupDTO.GroupeDTO dto) {
        if (groupeRepository.existsByNomGroupe(dto.getNomGroupe())) {
            return false;
        }

        Groupe groupe = new Groupe();
        groupe.setNomGroupe(dto.getNomGroupe());

        Prof prof = profRepository.findById(dto.getProfId()).orElse(null);
        if (prof == null) {
            throw new IllegalArgumentException("Le prof est absent, il sèche les cours");
        }
        groupe.setProf(prof);

        groupeRepository.save(groupe);
        return true;
    }

    public boolean deleteGroupById(Long idGroupe) {
        Groupe groupe = groupeRepository.findAllByIdgroup(idGroupe);
        if (groupe == null) {
            throw new RuntimeException("Not found: " + idGroupe);
        }

        List<Eleve> eleves = eleveRepository.findByGroupe(groupe);
        for (Eleve eleve : eleves) {
            eleveRepository.delete(eleve);
        }

        groupeRepository.delete(groupe);
        return true;
    }

    public List<Groupe> getGroupsByProfId(Long profId) {
        Prof prof = new Prof();
        prof.setIdprof(profId);
        return groupeRepository.findAllByProf(prof);
    }

    public List<Groupe> getAll() {
        return groupeRepository.findAll();
    }
}