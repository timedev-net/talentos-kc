package br.com.home.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class PessoaTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Pessoa getPessoaSample1() {
        return new Pessoa().id(1L).nome("nome1").email("email1").cpf("cpf1").miniBio("miniBio1").fotoPerfilUrl("fotoPerfilUrl1");
    }

    public static Pessoa getPessoaSample2() {
        return new Pessoa().id(2L).nome("nome2").email("email2").cpf("cpf2").miniBio("miniBio2").fotoPerfilUrl("fotoPerfilUrl2");
    }

    public static Pessoa getPessoaRandomSampleGenerator() {
        return new Pessoa()
            .id(longCount.incrementAndGet())
            .nome(UUID.randomUUID().toString())
            .email(UUID.randomUUID().toString())
            .cpf(UUID.randomUUID().toString())
            .miniBio(UUID.randomUUID().toString())
            .fotoPerfilUrl(UUID.randomUUID().toString());
    }
}
