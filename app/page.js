'use client';

export default function Home() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello, I want to join NGO training'
    );
    window.open(`https://wa.me/919129861259?text=${message}`, '_blank');
  };

  const navLink = {
    textDecoration: 'none',
    color: '#0f172a',
    fontWeight: 700,
    fontSize: '16px',
  };

  const sectionLabel = {
    color: '#2563eb',
    fontWeight: 800,
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '10px',
  };

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '24px',
    padding: '26px',
    boxShadow: '0 12px 30px rgba(15,23,42,0.08)',
    border: '1px solid #e2e8f0',
  };

  const programs = [
    {
      title: 'Water Conservation & Watershed',
      desc: 'Integrated watershed development, water harvesting, climate resilience and natural resource management for rural communities.',
      icon: '💧',
    },
    {
      title: 'Livelihood & Skill Development',
      desc: 'Youth skilling, enterprise promotion, livelihood enhancement and practical training support for rural families.',
      icon: '🌾',
    },
    {
      title: 'Farmer Producer Organizations',
      desc: 'FPO promotion, collective marketing, agri-business systems, value chain development and farmer institution building.',
      icon: '🚜',
    },
    {
      title: 'Women & Community Leadership',
      desc: 'Women empowerment, SHG strengthening, leadership development and community mobilisation for inclusive growth.',
      icon: '👩‍🌾',
    },
  ];

  const services = [
    'Proposal Writing & DPR Support',
    'CSR & Grant Readiness Training',
    'Annual Reports & Monitoring Formats',
    'FPO, Livelihood & Rural Development Support',
    'Policy, Governance & Compliance Systems',
    'Community Mobilisation & Institutional Strengthening',
  ];

  const impacts = [
    ['5000+', 'Farmers Reached'],
    ['100+', 'Villages Covered'],
    ['10+', 'Development Projects'],
    ['1000+', 'Trainees & NGO Learners'],
  ];

  const highlights = [
    'Grassroots institution support in Hindi and English',
    'Practical NGO systems, documentation and training support',
    'Focused on livelihoods, water, agriculture and community institutions',
    'Designed to connect field impact with donor confidence',
  ];

  return (
    <div
      style={{
        margin: 0,
        background: '#f8fafc',
        color: '#0f172a',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.94)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <img
              src="/logo.png"
              alt="Collective Action India Logo"
              style={{
                width: '68px',
                height: '68px',
                objectFit: 'contain',
                borderRadius: '14px',
                background: 'transparent',
              }}
            />
            <div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Collective Action India
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#64748b',
                  marginTop: '4px',
                }}
              >
                Rural Development • NGO Systems • Livelihoods • Water • Impact
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '22px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <a href="#about" style={navLink}>About</a>
            <a href="#programs" style={navLink}>Programs</a>
            <a href="#impact" style={navLink}>Impact</a>
            <a href="#services" style={navLink}>Services</a>
            <a href="#contact" style={navLink}>Contact</a>
          </div>
        </div>
      </header>

      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,6,23,0.58), rgba(2,6,23,0.68)), url('/banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '88px 24px 92px',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.9fr',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '9px 16px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.16)',
                color: 'white',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Premium NGO Homepage
            </div>

            <h1
              style={{
                fontSize: '72px',
                lineHeight: 1.02,
                color: 'white',
                margin: '22px 0 18px',
                fontWeight: 800,
                letterSpacing: '-1px',
                maxWidth: '760px',
              }}
            >
              Empowering Rural Communities Through Sustainable Development
            </h1>

            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.8,
                color: '#dbeafe',
                margin: 0,
                maxWidth: '760px',
              }}
            >
              Collective Action India supports grassroots institutions, NGOs,
              farmers, women and rural youth through watershed development,
              livelihoods, training, documentation, institutional strengthening
              and impact-driven community action.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                marginTop: '30px',
              }}
            >
              <button
                onClick={handleWhatsApp}
                style={{
                  background: '#ffffff',
                  color: '#0f172a',
                  padding: '15px 24px',
                  borderRadius: '16px',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 12px 26px rgba(255,255,255,0.18)',
                }}
              >
                Join WhatsApp
              </button>

              <a
                href="#contact"
                style={{
                  border: '1px solid rgba(255,255,255,0.28)',
                  color: 'white',
                  padding: '15px 24px',
                  borderRadius: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.06)',
                }}
              >
                Contact Us
              </a>

              <a
                href="#services"
                style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '15px 24px',
                  borderRadius: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Explore Services
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.1)',
                padding: '24px',
                borderRadius: '28px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#e2e8f0',
                }}
              >
                Why Collective Action India
              </div>
              <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
                {highlights.map((item) => (
                  <div
                    key={item}
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      padding: '14px',
                      borderRadius: '18px',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '16px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {impacts.map((item) => (
                <div
                  key={item[1]}
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '20px',
                    borderRadius: '24px',
                    color: 'white',
                  }}
                >
                  <div style={{ fontSize: '34px', fontWeight: 800 }}>
                    {item[0]}
                  </div>
                  <div style={{ marginTop: '8px', color: '#dbeafe', fontSize: '14px' }}>
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
        >
          <div style={cardStyle}>
            <div style={sectionLabel}>About Us</div>
            <h2
              style={{
                marginTop: '16px',
                fontSize: '34px',
                fontWeight: 800,
                lineHeight: 1.3,
              }}
            >
              A platform connecting field action with systems, visibility and institutional growth.
            </h2>
            <p
              style={{
                marginTop: '20px',
                fontSize: '16px',
                lineHeight: 1.9,
                color: '#475569',
              }}
            >
              Collective Action India works as a professional yet grassroots-oriented
              initiative that supports rural development, community institutions,
              livelihoods, training, NGO systems and documentation. Our mission is to
              strengthen field organisations and help them grow with clarity, structure
              and measurable impact.
            </p>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #059669)',
              color: 'white',
              padding: '32px',
              borderRadius: '28px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              Our Core Focus
            </div>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }}>
              {[
                'Rural development and watershed systems',
                'Livelihood promotion and skill training',
                'Community institutions and FPO support',
                'Grant, compliance and NGO documentation systems',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    padding: '14px',
                    borderRadius: '18px',
                    fontSize: '15px',
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={sectionLabel}>Programs</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>
              Our major thematic programs
            </h2>
            <p style={{ marginTop: '16px', color: '#475569', lineHeight: 1.8 }}>
              Our work blends natural resource management, institutional strengthening
              and livelihood promotion to create long-term development outcomes.
            </p>
          </div>

          <div
            style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {programs.map((program) => (
              <div
                key={program.title}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '28px',
                  padding: '24px',
                  boxShadow: '0 8px 20px rgba(15,23,42,0.05)',
                }}
              >
                <div style={{ fontSize: '42px' }}>{program.icon}</div>
                <h3 style={{ marginTop: '16px', fontSize: '20px', fontWeight: 800 }}>
                  {program.title}
                </h3>
                <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.8, color: '#475569' }}>
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="impact"
        style={{ background: '#020617', color: 'white', padding: '80px 24px' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <div
              style={{
                fontSize: '13px',
                color: '#6ee7b7',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Impact
            </div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>
              Creating visible change at community level
            </h2>
            <p style={{ marginTop: '16px', color: '#cbd5e1', lineHeight: 1.8 }}>
              We believe development should be measurable, community-owned and capable
              of attracting stronger partnerships through clear impact communication.
            </p>
          </div>

          <div
            style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {impacts.map((item) => (
              <div
                key={item[1]}
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '24px',
                  borderRadius: '28px',
                }}
              >
                <div style={{ fontSize: '42px', fontWeight: 800 }}>{item[0]}</div>
                <div style={{ marginTop: '8px', fontSize: '14px', color: '#cbd5e1' }}>
                  {item[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
        >
          <div>
            <div style={sectionLabel}>Professional Services</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>
              Systems, support and strategic guidance
            </h2>
            <p style={{ marginTop: '16px', color: '#475569', lineHeight: 1.8 }}>
              We support NGOs, collectives, community institutions and social leaders
              with practical services that strengthen presentation, compliance,
              training and growth systems.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            {services.map((item) => (
              <div
                key={item}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  padding: '16px',
                  borderRadius: '18px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#1e293b',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div
          style={{
            background: 'linear-gradient(90deg, #1d4ed8, #059669)',
            color: 'white',
            borderRadius: '32px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Call To Action
              </div>
              <h2 style={{ marginTop: '12px', fontSize: '36px', fontWeight: 800 }}>
                Ready to collaborate, train or build impact together?
              </h2>
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
                Join our learning network, explore our programs, connect for
                documentation support or reach us for NGO strengthening and field
                partnership opportunities.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                gap: '14px',
              }}
            >
              <button
                onClick={handleWhatsApp}
                style={{
                  background: 'white',
                  color: '#0f172a',
                  padding: '14px 22px',
                  borderRadius: '16px',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Join WhatsApp
              </button>

              <a
                href="mailto:info@cai.org"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  padding: '14px 22px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: 'white', padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
        >
          <div>
            <div style={sectionLabel}>Contact</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>
              Let’s build stronger communities together.
            </h2>
            <p style={{ marginTop: '16px', maxWidth: '620px', color: '#475569', lineHeight: 1.8 }}>
              For training, NGO systems, proposal support, FPO development,
              grassroots collaboration and rural development initiatives, connect
              with Collective Action India.
            </p>

            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={handleWhatsApp}
                style={{
                  background: '#16a34a',
                  color: 'white',
                  padding: '14px 22px',
                  borderRadius: '16px',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                WhatsApp Now
              </button>

              <a
                href="mailto:info@cai.org"
                style={{
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  padding: '14px 22px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'grid', gap: '18px', fontSize: '15px', color: '#334155' }}>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Organization</div>
                <div>Collective Action India</div>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Mobile</div>
                <div>+91 9129861259, +91 8175934008</div>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Email</div>
                <a href="mailto:info@cai.org">info@cai.org</a>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Instagram</div>
                <a href="#" target="_blank" rel="noreferrer">@collectiveactionindia</a>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Facebook</div>
                <a href="#" target="_blank" rel="noreferrer">Collective Action India Facebook Page</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: '1px solid #e2e8f0',
          background: '#020617',
          color: 'white',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
            fontSize: '14px',
          }}
        >
          <div>© 2026 Collective Action India. All rights reserved.</div>
          <div>Built for impact, visibility and rural transformation.</div>
        </div>
      </footer>

      <button
        onClick={handleWhatsApp}
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 50,
          background: '#22c55e',
          color: 'white',
          padding: '14px 20px',
          borderRadius: '999px',
          fontWeight: 700,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 20px 35px rgba(0,0,0,0.2)',
        }}
      >
        WhatsApp Now
      </button>
    </div>
  );
}
