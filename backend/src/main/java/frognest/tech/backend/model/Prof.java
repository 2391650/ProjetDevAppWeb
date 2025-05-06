package frognest.tech.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Prof {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idprof;
    private String fullname;
    private String passwd;


    public Long getIdprof() {
        return idprof;
    }

    public void setIdprof(Long idprof) {
        this.idprof = idprof;
    }

    public String getFirstname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
}

