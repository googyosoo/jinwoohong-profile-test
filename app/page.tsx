import Image from "next/image";

export default function Home() {
  const profile = {
    name: "홍진우",
    enName: "HONG JINWOO",
    job: "초등학교 교사 (정보 업무 담당) / 개발자",
    age: 45,
    favorites: "따뜻한 국물의 음식 및 음료",
    contact: "010-5019-0758",
    email: "kiparang999@gmail.com",
    image: "/profile.jpg",
  };

  return (
    <div className="min-h-screen p-8 md:p-20 font-[var(--font-cyber)] bg-cyber-black selection:bg-cyber-cyan selection:text-cyber-black">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="relative py-10 border-b-2 border-cyber-cyan overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[10px] text-cyber-cyan opacity-50 uppercase tracking-widest">
            System Status: Operational // v1.0.4
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter neon-text-pink animate-pulse">
            {profile.enName}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-mono text-cyber-cyan flex items-center gap-2">
            <span className="w-4 h-4 bg-cyber-cyan animate-ping rounded-full inline-block" />
            {profile.job}
          </p>
        </header>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Image Area */}
          <div className="relative group overflow-hidden">
            <div className="relative z-10 p-1 bg-cyber-cyan neon-border transform hover:scale-105 transition-transform duration-500">
              <Image
                src={profile.image}
                alt={profile.name}
                width={400}
                height={400}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 border-4 border-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            {/* Decorative bits */}
            <div className="absolute -bottom-2 -left-2 w-12 h-12 border-l-4 border-b-4 border-cyber-yellow z-20" />
            <div className="absolute -top-2 -right-2 w-12 h-12 border-r-4 border-t-4 border-cyber-pink z-20" />
          </div>

          {/* Info Area */}
          <div className="md:col-span-2 space-y-6">
            <section className="cyber-panel p-6 space-y-4">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-cyber-yellow border-b border-cyber-yellow/30 pb-2">
                Biological Data
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                <div className="space-y-1">
                  <span className="text-xs text-cyber-cyan block uppercase opacity-70">Name</span>
                  <p className="font-bold">{profile.name}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-cyber-cyan block uppercase opacity-70">Age</span>
                  <p className="font-bold">만 {profile.age}세 (Standard Earth Years)</p>
                </div>
              </div>
            </section>

            <section className="cyber-panel p-6 space-y-4 border-l-cyber-cyan">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-cyber-cyan border-b border-cyber-cyan/30 pb-2">
                Preferences
              </h2>
              <div className="space-y-1">
                <span className="text-xs text-cyber-cyan block uppercase opacity-70">Likes</span>
                <p className="text-xl neon-text-pink">{profile.favorites}</p>
              </div>
            </section>

            <section className="cyber-panel p-6 space-y-4 border-l-cyber-yellow">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-cyber-yellow border-b border-cyber-yellow/30 pb-2">
                Communication Link
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                  <div>
                    <span className="text-xs text-cyber-cyan block uppercase opacity-70">Signal</span>
                    <a href={`tel:${profile.contact}`} className="text-xl font-mono hover:text-cyber-yellow transition-colors underline decoration-dotted">
                      {profile.contact}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-cyber-cyan block uppercase opacity-70">Email</span>
                    <a href={`mailto:${profile.email}`} className="text-xl font-mono hover:text-cyber-yellow transition-colors underline decoration-dotted">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full py-3 bg-transparent border-2 border-cyber-cyan text-cyber-cyan font-bold uppercase tracking-[0.3em] hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300 neon-border cursor-pointer">
                    Establish Secure Connection
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-20 pb-10 text-center opacity-30 text-xs tracking-[0.5em] uppercase">
          Generated by ANTIGRAVITY // 2026.02.21 // NEON-FUTURE-GRID
        </footer>
      </main>
    </div>
  );
}

