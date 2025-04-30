package frognest.tech.backend.service;

import frognest.tech.backend.model.Prof;
import frognest.tech.backend.repositories.ProfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ProfService {
    private final ProfRepository profRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public ProfService(ProfRepository profRepository) {
        this.profRepository = profRepository;
    }

    public boolean createProf(Prof prof) {
        if (profRepository.findByFirstname(prof.getFirstname()) == null) {
            prof.setPasswd(passwordEncoder.encode(prof.getPasswd()));
            profRepository.save(prof);
            return true;
        }
        return false;
    }

    public Prof findProfByNameAndPassword(String firstname, String passwd) {
        Prof prof = profRepository.findByFirstname(firstname);
        if (prof != null && passwordEncoder.matches(passwd, prof.getPasswd())) {
            return prof;
        }
        return null;
    }
    public Prof findProfbyId(Long idprof) {
        return profRepository.findByIdprof(idprof);
    }

    public Prof findByFirstname(String firstname) {
        return profRepository.findByFirstname(firstname);
    }
}