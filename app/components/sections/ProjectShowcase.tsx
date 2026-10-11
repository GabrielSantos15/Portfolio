import Link from "next/link";
import { projects } from "../../data/projects";
import styles from "./ProjectShowcase.module.css";
import Image from "next/image";

export default function ProjectShowcase() {
    return (
        <section id="projetosSection" className={styles.section}>
            <header className={styles.sectionHeader}>
                <h2>Projetos</h2>
                <p>
                    Ideias que viraram código, telas que ganham vida e experiências que
                    funcionam de verdade
                </p>
            </header>

            <div className={styles.projetosContainer}>
                {projects.map((projeto) => (
                    <Link
                        key={projeto.id}
                        href={`/projetos?projeto=${projeto.id}`}
                        className={styles.projetoCardLink}
                    >
                        <article className={styles.projeto}>
                            <h4 className={styles.numberProjeto}>0{projeto.id}</h4>

                            <figure className={styles.projetoImageWrapper}>
                                <Image
                                    src={projeto.assets[0]}
                                    alt={`Projeto ${projeto.nome}`}
                                    width={600}
                                    height={400}
                                    className={styles.projetoImage}
                                />
                            </figure>

                            <div className={styles.textContainerProjeto}>
                                <h3>{projeto.nome}</h3>
                                <p>{projeto.descricao}</p>
                            </div>

                            <div className={styles.tecnologiasContainerProjeto}>
                                {projeto.tecnologias.slice(0, 3).map((tec, index) => (
                                    <span className={styles.tecProjeto} key={index}>
                                        {tec}
                                    </span>
                                ))}
                                {projeto.tecnologias.length > 3 && (
                                    <span
                                        className={`${styles.tecProjeto} ${styles.contador}`}
                                        title={projeto.tecnologias.slice(3).join(", ")}
                                    >
                                        +{projeto.tecnologias.length - 3}
                                    </span>
                                )}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
};