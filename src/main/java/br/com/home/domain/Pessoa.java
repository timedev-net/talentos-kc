package br.com.home.domain;

import br.com.home.domain.enumeration.Genero;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;

/**
 * A Pessoa.
 */
@Entity
@Table(name = "pessoa")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Pessoa implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "nome", nullable = false)
    private String nome;

    @NotNull
    @Column(name = "email", nullable = false)
    private String email;

    @NotNull
    @Column(name = "cpf", nullable = false)
    private String cpf;

    @Column(name = "nascimento")
    private Instant nascimento;

    @Enumerated(EnumType.STRING)
    @Column(name = "genero")
    private Genero genero;

    @Column(name = "mini_bio")
    private String miniBio;

    @Column(name = "foto_perfil_url")
    private String fotoPerfilUrl;

    @Column(name = "criado_em")
    private Instant criadoEm;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Pessoa id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public Pessoa nome(String nome) {
        this.setNome(nome);
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return this.email;
    }

    public Pessoa email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return this.cpf;
    }

    public Pessoa cpf(String cpf) {
        this.setCpf(cpf);
        return this;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Instant getNascimento() {
        return this.nascimento;
    }

    public Pessoa nascimento(Instant nascimento) {
        this.setNascimento(nascimento);
        return this;
    }

    public void setNascimento(Instant nascimento) {
        this.nascimento = nascimento;
    }

    public Genero getGenero() {
        return this.genero;
    }

    public Pessoa genero(Genero genero) {
        this.setGenero(genero);
        return this;
    }

    public void setGenero(Genero genero) {
        this.genero = genero;
    }

    public String getMiniBio() {
        return this.miniBio;
    }

    public Pessoa miniBio(String miniBio) {
        this.setMiniBio(miniBio);
        return this;
    }

    public void setMiniBio(String miniBio) {
        this.miniBio = miniBio;
    }

    public String getFotoPerfilUrl() {
        return this.fotoPerfilUrl;
    }

    public Pessoa fotoPerfilUrl(String fotoPerfilUrl) {
        this.setFotoPerfilUrl(fotoPerfilUrl);
        return this;
    }

    public void setFotoPerfilUrl(String fotoPerfilUrl) {
        this.fotoPerfilUrl = fotoPerfilUrl;
    }

    public Instant getCriadoEm() {
        return this.criadoEm;
    }

    public Pessoa criadoEm(Instant criadoEm) {
        this.setCriadoEm(criadoEm);
        return this;
    }

    public void setCriadoEm(Instant criadoEm) {
        this.criadoEm = criadoEm;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Pessoa)) {
            return false;
        }
        return getId() != null && getId().equals(((Pessoa) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Pessoa{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", email='" + getEmail() + "'" +
            ", cpf='" + getCpf() + "'" +
            ", nascimento='" + getNascimento() + "'" +
            ", genero='" + getGenero() + "'" +
            ", miniBio='" + getMiniBio() + "'" +
            ", fotoPerfilUrl='" + getFotoPerfilUrl() + "'" +
            ", criadoEm='" + getCriadoEm() + "'" +
            "}";
    }
}
