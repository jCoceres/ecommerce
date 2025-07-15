import React from 'react'
import './styleAcercaDe.css'

const AcercaDe = () => {
  return (
    <div className="about-container">
      
      <div className="about-hero-section">
        <div className="about-page-container">
          <h1>Acerca de Nosotros</h1>
          <p>Conoce más sobre nuestra empresa y nuestro compromiso con la excelencia</p>
        </div>
      </div>

      <main className="about-page-container">
        
        <section className="about-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Nuestra Historia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos odit, ad ducimus optio maxime maiores. Error autem eligendi eos? Architecto consequuntur molestias porro, eos quos ullam quasi maiores ex illo!
                Vitae corrupti odio quos deleniti ratione sit, rerum doloremque minus corporis quam. 
                 molestiae velit reiciendis doloribus possimus?
              </p>
              <p>
                Voluptates, soluta exercitationem recusandae minus doloribus alias ipsa a reprehenderit, nulla sint aspernatur incidunt aut.
              </p>
            </div>
            <div className="image-content">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop" alt="Nuestra historia" />
            </div>
          </div>
        </section>

        
        <section className="mission-vision">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3>Nuestra Misión</h3>
              <p>
                Proporcionar productos de calidad excepcional a precios justos, 
                garantizando una experiencia de compra segura, rápida y satisfactoria 
                para cada uno de nuestros clientes.
              </p>
            </div>
            <div className="vision-card">
              <div className="icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>Nuestra Visión</h3>
              <p>
                Ser la tienda en línea líder en el mercado, reconocida por nuestra 
                innovación, calidad de servicio y compromiso con la satisfacción 
                del cliente en cada transacción.
              </p>
            </div>
          </div>
        </section>

        
        <section className="values-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h4>Calidad</h4>
              <p>Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h4>Confianza</h4>
              <p>Construimos relaciones duraderas basadas en la transparencia y honestidad.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h4>Innovación</h4>
              <p>Constantemente mejoramos nuestros procesos y servicios para ofrecer lo mejor.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h4>Servicio</h4>
              <p>Nuestro equipo está siempre dispuesto a ayudarte en lo que necesites.</p>
            </div>
          </div>
        </section>


        <section className="team-section">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="CEO" />
              </div>
              <div className="member-info">
                <h4>Juan Pérez</h4>
                <p className="role">CEO & Fundador</p>
                <p className="description">
                  Con más de 10 años de experiencia en e-commerce, Juan lidera 
                  nuestra visión estratégica y crecimiento empresarial.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" alt="CTO" />
              </div>
              <div className="member-info">
                <h4>María González</h4>
                <p className="role">Directora de Tecnología</p>
                <p className="description">
                  María se encarga de mantener nuestra plataforma actualizada 
                  y segura, garantizando la mejor experiencia técnica.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="COO" />
              </div>
              <div className="member-info">
                <h4>Carlos Rodríguez</h4>
                <p className="role">Director de Operaciones</p>
                <p className="description">
                  Carlos supervisa toda la cadena de suministro y logística, 
                  asegurando entregas rápidas y eficientes.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="stats-section">
          <h2>Nuestros Logros</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Productos Disponibles</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.5%</div>
              <div className="stat-label">Satisfacción del Cliente</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte al Cliente</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AcercaDe