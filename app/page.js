export default function Home() {
  const programs = [
    {
      title: 'Water Conservation & Watershed',
      desc: 'Integrated watershed development, water harvesting, natural resource management and climate resilience for rural communities.',
      icon: '💧',
    },
    {
      title: 'Livelihood & Skill Development',
      desc: 'Training, enterprise promotion, youth skilling, women livelihood development and grassroots economic strengthening.',
      icon: '🌾',
    },
    {
      title: 'Farmer Producer Organizations',
      desc: 'FPO promotion, value chain development, collective marketing, agri-business incubation and farmer institution building.',
      icon: '🚜',
    },
    {
      title: 'Women & Community Leadership',
      desc: 'Women empowerment, SHG strengthening, community mobilization and local leadership development for inclusive growth.',
      icon: '👩‍🌾',
    },
  ];

  const impact = [
    { value: '5000+', label: 'Farmers Reached' },
    { value: '100+', label: 'Villages Covered' },
    { value: '10+', label: 'Development Projects' },
    { value: '1000+', label: 'Trainees & NGO Learners' },
  ];

  const highlights = [
    'Grassroots institution support in Hindi and English',
    'Practical NGO systems, documentation and training support',
    'Focused on livelihoods, water, agriculture and community institutions',
    'Designed to connect field impact with donor confidence',
  ];

  const services = [
    'Proposal Writing & DPR Support',
    'CSR & Grant Readiness Training',
    'Annual Reports & Monitoring Formats',
    'FPO, Livelihood & Rural Development Support',
    'Policy, Governance & Compliance Systems',
    'Community Mobilisation & Institutional Strengthening',
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a' }}>Collective Action India</div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>Rural Development • NGO Systems • Livelihoods • Water • Impact</div>
          </div>
          <div style={{ display: 'flex', gap: '18px', fontSize: '14px', fontWeight: 700, flexWrap: 'wrap' }}>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#impact">Impact</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(90deg, #020617, #172554, #065f46)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', padding: '8px 16px', fontSize: '14px', fontWeight: 700 }}>
              Full PRO NGO Website
            </div>
            <h1 style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1.15, marginTop: '20px' }}>
              Empowering Rural Communities Through Sustainable Development.
            </h1>
            <p style={{ marginTop: '24px', fontSize: '18px', lineHeight: 1.8, color: '#cbd5e1' }}>
              Collective Action India supports grassroots institutions, NGOs, farmers, women and rural youth through watershed development, livelihoods, training, documentation, institutional strengthening and impact-driven community action.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="https://wa.me/919129861259" target="_blank" rel="noreferrer" style={{ background: 'white', color: '#0f172a', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                Join WhatsApp
              </a>
              <a href="#contact" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                Contact Us
              </a>
              <a href="#services" style={{ background: '#10b981', color: 'white', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                Explore Services
              </a>
            </div>
          </div>

          <div>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '28px', boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#e2e8f0' }}>Why Collective Action India</div>
              <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
                {highlights.map((item) => (
                  <div key={item} style={{ background: 'rgba(255,255,255,0.1)', padding: '14px', borderRadius: '18px', fontSize: '14px', fontWeight: 600 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {impact.map((item) => (
                <div key={item.label} style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '24px' }}>
                  <div style={{ fontSize: '34px', fontWeight: 800 }}>{item.value}</div>
                  <div style={{ marginTop: '8px', fontSize: '14px', color: '#cbd5e1' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div style={{ background: 'white', padding: '32px', borderRadius: '28px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#1d4ed8' }}>About Us</div>
            <h2 style={{ marginTop: '16px', fontSize: '34px', fontWeight: 800, lineHeight: 1.3 }}>
              A platform connecting field action with systems, visibility and institutional growth.
            </h2>
            <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: 1.9, color: '#475569' }}>
              Collective Action India works as a professional yet grassroots-oriented initiative that supports rural development, community institutions, livelihoods, training and NGO systems. The platform aims to strengthen organizations and communities through practical support, better presentation, stronger systems and measurable impact.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #059669)', color: 'white', padding: '32px', borderRadius: '28px', boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Our Core Focus</div>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px' }}>
              {[
                'Rural development and watershed systems',
                'Livelihood promotion and skill training',
                'Community institutions and FPO support',
                'Grant, compliance and NGO documentation systems',
              ].map((item) => (
                <div key={item} style={{ background: 'rgba(255,255,255,0.12)', padding: '14px', borderRadius: '18px', fontSize: '15px', fontWeight: 600 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#1d4ed8' }}>Programs</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>Our major thematic programs</h2>
            <p style={{ marginTop: '16px', color: '#475569', lineHeight: 1.8 }}>
              Our work blends natural resource management, institutional strengthening and livelihood promotion to create long-term development outcomes.
            </p>
          </div>

          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {programs.map((program) => (
              <div key={program.title} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '28px', padding: '24px', boxShadow: '0 8px 20px rgba(15,23,42,0.05)' }}>
                <div style={{ fontSize: '42px' }}>{program.icon}</div>
                <h3 style={{ marginTop: '16px', fontSize: '20px', fontWeight: 800 }}>{program.title}</h3>
                <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.8, color: '#475569' }}>{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" style={{ background: '#020617', color: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#6ee7b7' }}>Impact</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>Creating visible change at community level</h2>
            <p style={{ marginTop: '16px', color: '#cbd5e1', lineHeight: 1.8 }}>
              We believe development should be measurable, community-owned and capable of attracting stronger partnerships through clear impact communication.
            </p>
          </div>

          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {impact.map((item) => (
              <div key={item.label} style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '28px' }}>
                <div style={{ fontSize: '42px', fontWeight: 800 }}>{item.value}</div>
                <div style={{ marginTop: '8px', fontSize: '14px', color: '#cbd5e1' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#1d4ed8' }}>Professional Services</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>Systems, support and strategic guidance</h2>
            <p style={{ marginTop: '16px', color: '#475569', lineHeight: 1.8 }}>
              We support NGOs, collectives, community institutions and social leaders with practical services that strengthen presentation, compliance, training and growth systems.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            {services.map((item) => (
              <div key={item} style={{ background: 'white', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '18px', fontSize: '15px', fontWeight: 700, color: '#1e293b', boxShadow: '0 4px 12px rgba(15,23,42,0.04)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ background: 'linear-gradient(90deg, #1d4ed8, #059669)', color: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Call To Action</div>
              <h2 style={{ marginTop: '12px', fontSize: '36px', fontWeight: 800 }}>Ready to collaborate, train or build impact together?</h2>
              <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
                Join our learning network, explore our programs, connect for documentation support or reach us for NGO strengthening and field partnership opportunities.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '14px' }}>
              <a href="https://wa.me/919129861259" target="_blank" rel="noreferrer" style={{ background: 'white', color: '#0f172a', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                Join WhatsApp
              </a>
              <a href="mailto:support.cai.in@gmail.com" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#1d4ed8' }}>Contact</div>
            <h2 style={{ marginTop: '12px', fontSize: '40px', fontWeight: 800 }}>Let’s build stronger communities together.</h2>
            <p style={{ marginTop: '16px', maxWidth: '620px', color: '#475569', lineHeight: 1.8 }}>
              For training, NGO systems, proposal support, FPO development, grassroots collaboration and rural development initiatives, connect with Collective Action India.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="https://wa.me/919129861259" target="_blank" rel="noreferrer" style={{ background: '#16a34a', color: 'white', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                WhatsApp Now
              </a>
              <a href="mailto:support.cai.in@gmail.com" style={{ border: '1px solid #cbd5e1', color: '#334155', padding: '14px 22px', borderRadius: '16px', fontWeight: 700, textDecoration: 'none' }}>
                Contact Us
              </a>
            </div>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '32px', boxShadow: '0 6px 16px rgba(15,23,42,0.05)' }}>
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
                <a href="mailto:support.cai.in@gmail.com">support.cai.in@gmail.com</a>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Instagram</div>
                <a href="https://www.instagram.com/collectiveactionindia/?hl=en" target="_blank" rel="noreferrer">@collectiveactionindia</a>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Facebook</div>
                <a href="https://www.facebook.com/profile.php?id=61588352289456" target="_blank" rel="noreferrer">Collective Action India Facebook Page</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #e2e8f0', background: '#020617', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', fontSize: '14px', color: '#cbd5e1' }}>
          <div>© 2026 Collective Action India. All rights reserved.</div>
          <div>Built for impact, visibility and rural transformation.</div>
        </div>
      </footer>

      <a
        href="https://wa.me/919129861259"
        target="_blank"
        rel="noreferrer"
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
          textDecoration: 'none',
          boxShadow: '0 20px 35px rgba(0,0,0,0.2)'
        }}
      >
        WhatsApp Now
      </a>
    </div>
  );
}
