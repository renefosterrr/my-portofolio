export type Locale = 'id' | 'en'

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  points: string[]
}

export type Project = {
  name: string
  type: string
  description: string
  focus: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type PortfolioContent = {
  nav: Record<string, string>
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    primaryCta: string
    secondaryCta: string
    status: string
    location: string
  }
  stats: Array<{ value: string; label: string }>
  about: {
    title: string
    paragraphs: string[]
  }
  experience: {
    title: string
    items: Experience[]
  }
  projects: {
    title: string
    subtitle: string
    items: Project[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  education: {
    title: string
    school: string
    meta: string
  }
  contact: {
    title: string
    description: string
    email: string
    cta: string
  }
}

export const content: Record<Locale, PortfolioContent> = {
  id: {
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak',
    },
    hero: {
      eyebrow: 'PORTFOLIO / IT INFRASTRUCTURE / CYBERSECURITY',
      title: 'Yogi Ananda Brata',
      subtitle: 'IT Engineering Team Lead | Network Engineer | Cybersecurity Specialist',
      description: 'Membangun dan mengamankan infrastruktur IT berskala enterprise dengan fokus pada network engineering, server infrastructure, dan cybersecurity operations.',
      primaryCta: 'Lihat Proyek',
      secondaryCta: 'Hubungi Saya',
      status: 'Open to Datacenter Technician | Network Engineer | IT Supervisor | Sysadmin',
      location: 'Sleman, Yogyakarta, Indonesia',
    },
    stats: [
      { value: '5+', label: 'Tahun pengalaman' },
      { value: '244+', label: 'Endpoint dikelola' },
      { value: 'Multi-WAN', label: 'Enterprise networking' },
      { value: 'SIEM', label: 'Security operations' },
    ],
    about: {
      title: 'Tentang Saya',
      paragraphs: [
        'IT Engineering Team Lead dengan pengalaman lebih dari lima tahun dalam rekayasa jaringan, infrastruktur server, dan keamanan siber. Berpengalaman mengelola infrastruktur berskala enterprise dengan ratusan endpoint, arsitektur multi-WAN, serta sistem keamanan terpusat.',
        'Memiliki kemampuan dalam memimpin tim teknis, merancang arsitektur infrastruktur, serta membangun solusi IT end-to-end mulai dari tahap perencanaan, implementasi, hingga operasional dan pemeliharaan.',
      ],
    },
    experience: {
      title: 'Pengalaman Profesional',
      items: [
        {
          role: 'IT Engineering Team Lead',
          company: 'PT Adijaya Karya Makmur (Mining)',
          period: 'Agustus 2022 – Juni 2026',
          location: 'Palu, Sulawesi Tengah',
          points: [
            'Memimpin tim IT dalam pengelolaan jaringan, infrastruktur server, dan keamanan siber pada lingkungan operasional berskala enterprise.',
            'Mengelola lebih dari 244 endpoint menggunakan Wazuh SIEM dan ZenArmor IDS/IPS untuk monitoring keamanan serta respons insiden.',
            'Merancang dan mengimplementasikan arsitektur multi-WAN menggunakan OPNsense, MikroTik, Cloudflare Zero Trust, dan kebijakan DLP.',
            'Men-deploy dan mengadministrasikan Proxmox Virtualization Cluster, mail stack berbasis Postfix/Dovecot, serta OpenLDAP untuk manajemen identitas.',
          ],
        },
        {
          role: 'Head of Cyber Security Department',
          company: 'Universitas Tadulako',
          period: 'Desember 2019 – Juni 2021',
          location: 'Palu, Sulawesi Tengah',
          points: [
            'Memimpin divisi keamanan siber dan menyusun kebijakan serta prosedur keamanan IT institusional.',
            'Melaksanakan audit keamanan, monitoring jaringan, dan mitigasi ancaman siber di lingkungan universitas.',
          ],
        },
        {
          role: 'Freelance IT Consultant',
          company: 'Independent',
          period: '2018 – Sekarang',
          location: 'Remote / On-site',
          points: ['Memberikan konsultasi IT meliputi perancangan jaringan, deployment server, dan implementasi sistem keamanan.'],
        },
      ],
    },
    projects: {
      title: 'Proyek Pilihan',
      subtitle: 'Lima proyek utama dengan fokus pada automation, diagnostics, forensics, OSINT, dan AI vision.',
      items: [
        {
          name: 'Rene CAL LAB',
          type: 'Free',
          description: 'Aplikasi web untuk mencatat dan menganalisis riwayat pembuatan kopi dengan metode V60. Sistem mencakup pencatatan metode, koleksi biji kopi, serta variabel seduhan pada setiap sesi brewing.',
          focus: ['Web application', 'Data recording', 'User experience', 'Analytical tooling'],
        },
        {
          name: 'Raijin ',
          type: 'Free',
          description: 'Kumpulan CLI tools berbasis Python untuk membantu diagnosis masalah domain, DNS, SSL, mail server, dan hosting secara menyeluruh.',
          focus: ['Python automation', 'Network diagnostics', 'CLI engineering', 'Troubleshooting'],
        },
        {
          name: 'Kenjaku',
          type: 'Private Paid',
          description: 'Toolkit digital forensics untuk penelusuran jejak digital, analisis data, ekstraksi metadata, pemeriksaan EXIF, dan penerapan kriptografi.',
          focus: ['Digital forensics', 'Security analysis', 'Metadata extraction', 'Data reconstruction'],
        },
        {
          name: 'BlackWhale',
          type: 'Private Paid',
          description: 'Platform OSINT dan analisis intelijen untuk menelusuri informasi berbasis domain, email, nomor telepon, dan nomor identitas, termasuk indikasi paparan data.',
          focus: ['Threat intelligence', 'OSINT framework', 'Security monitoring', 'Data exposure detection'],
        },
        {
          name: 'KamiNoTe',
          type: 'Private Paid',
          description: 'Sistem identifikasi wajah berbasis AI yang memanfaatkan facial landmark detection, periocular recognition, dan 3D facial geometry.',
          focus: ['Computer vision', 'AI modeling', 'Biometric identification', 'CCTV integration'],
        },
      ],
    },
    skills: {
      title: 'Keahlian Teknis',
      groups: [
        { title: 'Network & Firewall', items: ['OPNsense', 'MikroTik', 'UniFi', 'Ruijie', 'VLAN', 'Load balancing', 'Routing', 'BGP/OSPF'] },
        { title: 'Virtualization & OS', items: ['Proxmox VE', 'Rocky Linux', 'Ubuntu Server', 'LXC/KVM', 'aaPanel'] },
        { title: 'Security & SIEM', items: ['Wazuh SIEM', 'ZenArmor IDS/IPS', 'Cloudflare Zero Trust', 'Cloudflare DLP', 'AbuseIPDB'] },
        { title: 'Mail Stack', items: ['Postfix', 'Dovecot', 'Mailcow', 'DKIM/SPF/DMARC'] },
        { title: 'DNS / DHCP', items: ['Unbound DNS', 'Kea DHCP', 'PowerDNS', 'Cloudflare DNS'] },
        { title: 'Database & Storage', items: ['Elasticsearch', 'MySQL', 'PostgreSQL'] },
        { title: 'Programming', items: ['Python', 'PHP', 'Go', 'JavaScript', 'Bash/Shell', 'Pine Script'] },
        { title: 'Tools & Platform', items: ['Nginx Proxy Manager', 'OpenLDAP', 'GLPI', 'n8n', 'Git'] },
      ],
    },
    education: {
      title: 'Pendidikan',
      school: 'SMK Teknik Komputer dan Jaringan (TKJ)',
      meta: 'Lulus 2017',
    },
    contact: {
      title: 'Mari Bangun Infrastruktur yang Lebih Aman',
      description: 'Terbuka untuk peluang kerja dan kolaborasi di bidang datacenter, network engineering, system administration, dan cybersecurity operations.',
      email: 'yogijr510@gmail.com',
      cta: 'Kirim Email',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'PORTFOLIO / IT INFRASTRUCTURE / CYBERSECURITY',
      title: 'Yogi Ananda Brata',
      subtitle: 'IT Engineering Team Lead | Network Engineer | Cybersecurity Specialist',
      description: 'Building and securing enterprise-scale IT infrastructure with a focus on network engineering, server infrastructure, and cybersecurity operations.',
      primaryCta: 'View Projects',
      secondaryCta: 'Contact Me',
      status: 'Open to Datacenter Technician | Network Engineer | IT Supervisor | Sysadmin',
      location: 'Sleman, Yogyakarta, Indonesia',
    },
    stats: [
      { value: '5+', label: 'Years experience' },
      { value: '244+', label: 'Endpoints managed' },
      { value: 'Multi-WAN', label: 'Enterprise networking' },
      { value: 'SIEM', label: 'Security operations' },
    ],
    about: {
      title: 'About Me',
      paragraphs: [
        'IT Engineering Team Lead with more than five years of experience in network engineering, server infrastructure, and cybersecurity. Experienced in managing enterprise-scale infrastructure with hundreds of endpoints, multi-WAN architectures, and centralized security systems.',
        'Skilled in leading technical teams, designing infrastructure architectures, and delivering end-to-end IT solutions from planning and implementation through operations and maintenance.',
      ],
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          role: 'IT Engineering Team Lead',
          company: 'PT Adijaya Karya Makmur (Mining)',
          period: 'August 2022 – June 2026',
          location: 'Palu, Central Sulawesi',
          points: [
            'Led the IT team responsible for network infrastructure, server systems, and cybersecurity across an enterprise-scale mining operation.',
            'Managed more than 244 endpoints using Wazuh SIEM and ZenArmor IDS/IPS for security monitoring and incident response.',
            'Designed and implemented a multi-WAN architecture using OPNsense, MikroTik, Cloudflare Zero Trust, and DLP policies.',
            'Deployed and administered a Proxmox Virtualization Cluster, Postfix/Dovecot mail stack, and OpenLDAP identity management infrastructure.',
          ],
        },
        {
          role: 'Head of Cyber Security Department',
          company: 'Universitas Tadulako',
          period: 'December 2019 – June 2021',
          location: 'Palu, Central Sulawesi',
          points: [
            'Led the cybersecurity department and developed institutional IT security policies and procedures.',
            'Conducted security audits, network monitoring, and cyber-threat mitigation across the university environment.',
          ],
        },
        {
          role: 'Freelance IT Consultant',
          company: 'Independent',
          period: '2018 – Present',
          location: 'Remote / On-site',
          points: ['Provide IT consulting services covering network design, server deployment, and security system implementation.'],
        },
      ],
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'Five key projects focused on automation, diagnostics, forensics, OSINT, and AI vision.',
      items: [
        {
          name: 'Rene CAL LAB',
          type: 'Free',
          description: 'A web application for recording and analyzing V60 coffee brewing sessions, including brewing methods, coffee bean collections, and session variables.',
          focus: ['Web application', 'Data recording', 'User experience', 'Analytical tooling'],
        },
        {
          name: 'Raijin ',
          type: 'Free',
          description: 'A Python-based CLI toolkit for diagnosing domain, DNS, SSL, mail server, and hosting issues across websites and hosting services.',
          focus: ['Python automation', 'Network diagnostics', 'CLI engineering', 'Troubleshooting'],
        },
        {
          name: 'Kenjaku',
          type: 'Private Paid',
          description: 'A digital forensics toolkit for tracing digital artifacts, analyzing forensic data, extracting metadata, examining EXIF information, and applying cryptographic techniques.',
          focus: ['Digital forensics', 'Security analysis', 'Metadata extraction', 'Data reconstruction'],
        },
        {
          name: 'BlackWhale',
          type: 'Private Paid',
          description: 'An OSINT and intelligence analysis platform for researching information associated with domains, email addresses, phone numbers, and identification numbers.',
          focus: ['Threat intelligence', 'OSINT framework', 'Security monitoring', 'Data exposure detection'],
        },
        {
          name: 'KamiNoTe',
          type: 'Private Paid',
          description: 'An AI-powered facial identification system using facial landmark detection, periocular recognition, and 3D facial geometry.',
          focus: ['Computer vision', 'AI modeling', 'Biometric identification', 'CCTV integration'],
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      groups: [
        { title: 'Network & Firewall', items: ['OPNsense', 'MikroTik', 'UniFi', 'Ruijie', 'VLAN', 'Load balancing', 'Routing', 'BGP/OSPF'] },
        { title: 'Virtualization & OS', items: ['Proxmox VE', 'Rocky Linux', 'Ubuntu Server', 'LXC/KVM', 'aaPanel'] },
        { title: 'Security & SIEM', items: ['Wazuh SIEM', 'ZenArmor IDS/IPS', 'Cloudflare Zero Trust', 'Cloudflare DLP', 'AbuseIPDB'] },
        { title: 'Mail Stack', items: ['Postfix', 'Dovecot', 'Mailcow', 'DKIM/SPF/DMARC'] },
        { title: 'DNS / DHCP', items: ['Unbound DNS', 'Kea DHCP', 'PowerDNS', 'Cloudflare DNS'] },
        { title: 'Database & Storage', items: ['Elasticsearch', 'MySQL', 'PostgreSQL'] },
        { title: 'Programming', items: ['Python', 'PHP', 'Go', 'JavaScript', 'Bash/Shell', 'Pine Script'] },
        { title: 'Tools & Platforms', items: ['Nginx Proxy Manager', 'OpenLDAP', 'GLPI', 'n8n', 'Git'] },
      ],
    },
    education: {
      title: 'Education',
      school: 'Vocational High School in Computer and Network Engineering (TKJ)',
      meta: 'Graduated 2017',
    },
    contact: {
      title: 'Let’s Build More Secure Infrastructure',
      description: 'Open to opportunities and collaborations across datacenter operations, network engineering, system administration, and cybersecurity operations.',
      email: 'yogijr510@gmail.com',
      cta: 'Send Email',
    },
  },
}
