
import { useState, useEffect } from "react";

// ─── PAGES ───────────────────────────────────────────────────────────────────

function Landing({ onNavigate }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 100);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { label: "TORNEIOS REALIZADOS", value: "124" },
    { label: "JOGADORES ATIVOS", value: "3.2K" },
    { label: "PREMIAÇÃO PAGA", value: "R$12K" },
    { label: "PARTIDAS JOGADAS", value: "1.8K" },
  ];

  const steps = [
    { n: "01", title: "INSCREVA-SE", desc: "Pague R$10 via Pix e entre na fila do torneio." },
    { n: "02", title: "COMPETE", desc: "Mata-mata 16 jogadores. 1v1 até o fim." },
    { n: "03", title: "DOMINE", desc: "Campeão leva R$100 e sobe no ranking." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      {/* Noise overlay */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid #ffffff08", backdropFilter: "blur(20px)", background: "#06080ccc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />
          <div style={{ display: "flex", gap: 12 }}>
            <Btn ghost onClick={() => onNavigate("login")}>ENTRAR</Btn>
            <Btn onClick={() => onNavigate("cadastro")}>CRIAR CONTA</Btn>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: 60 }}>
        {/* Grid bg */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#00ff8708 1px, transparent 1px), linear-gradient(90deg, #00ff8708 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />
        {/* Glow */}
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, #00ff8718 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px", maxWidth: 800 }}>
          <div style={{ display: "inline-block", background: "#00ff8712", border: "1px solid #00ff8733", borderRadius: 4, padding: "6px 16px", fontSize: 11, color: "#00ff87", letterSpacing: 3, fontFamily: "monospace", marginBottom: 32 }}>
            ▶ SEASON 01 — DREAM LEAGUE SOCCER
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.95, color: "#fff", marginBottom: 24, letterSpacing: -2 }}>
            FREITAS<br />
            <span style={{ color: "#00ff87", WebkitTextStroke: "0px", textShadow: "0 0 60px #00ff8766" }}>CUP</span>
          </h1>

          <p style={{ fontSize: 18, color: "#ffffff66", fontFamily: "monospace", marginBottom: 12, letterSpacing: 1 }}>
            Campeonatos competitivos de jogos mobile.
          </p>
          <p style={{ fontSize: 22, color: "#ffffff99", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: 48 }}>
            "Perdeu? Mostre que foi acidente."
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn large onClick={() => onNavigate("cadastro")}>COMPETIR AGORA →</Btn>
            <Btn ghost large onClick={() => onNavigate("login")}>JÁ TENHO CONTA</Btn>
          </div>

          {/* Prize card */}
          <div style={{ marginTop: 48, display: "inline-flex", gap: 32, background: "#0d1117", border: "1px solid #00ff8722", borderRadius: 12, padding: "16px 32px" }}>
            <PrizeStat label="INSCRIÇÃO" value="R$10" />
            <div style={{ width: 1, background: "#ffffff0a" }} />
            <PrizeStat label="PREMIAÇÃO" value="R$100" accent />
            <div style={{ width: 1, background: "#ffffff0a" }} />
            <PrizeStat label="FORMATO" value="TORNEIO" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: "1px solid #ffffff08", borderBottom: "1px solid #ffffff08", background: "#0d1117" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "32px 24px", borderRight: i < 3 ? "1px solid #ffffff08" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "#00ff87", marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#ffffff33", letterSpacing: 2, fontFamily: "monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 24px" }}>
        <SectionLabel>COMO FUNCIONA</SectionLabel>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 48, color: "#fff", marginBottom: 64, letterSpacing: -1 }}>
          Simples.<br /><span style={{ color: "#00ff87" }}>Direto.</span> Competitivo.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: "#0d1117", border: "1px solid #ffffff08", padding: 40, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 20, right: 20, fontFamily: "monospace", fontSize: 11, color: "#00ff8733", letterSpacing: 2 }}>{s.n}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#00ff87", marginBottom: 16 }}>{s.title}</div>
              <div style={{ fontSize: 15, color: "#ffffff55", lineHeight: 1.7, fontFamily: "monospace" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid #ffffff08", background: "#0d1117" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 56, color: "#fff", marginBottom: 16, letterSpacing: -1 }}>
            Próximo torneio<br /><span style={{ color: "#00ff87" }}>abre em breve.</span>
          </h2>
          <p style={{ color: "#ffffff44", fontFamily: "monospace", marginBottom: 40, fontSize: 15 }}>Crie sua conta agora e esteja pronto.</p>
          <Btn large onClick={() => onNavigate("cadastro")}>CRIAR CONTA GRÁTIS</Btn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #ffffff08", padding: "24px", textAlign: "center" }}>
        <Logo />
        <div style={{ marginTop: 12, display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "#ffffff22", fontFamily: "monospace" }}>freitascup7@gmail.com</span>
          <span onClick={() => onNavigate("suporte")} style={{ fontSize: 12, color: "#00ff8766", fontFamily: "monospace", cursor: "pointer" }}>Suporte</span>
          <span onClick={() => onNavigate("hallfama")} style={{ fontSize: 12, color: "#00ff8766", fontFamily: "monospace", cursor: "pointer" }}>Hall da Fama</span>
          <span onClick={() => onNavigate("ranking")} style={{ fontSize: 12, color: "#00ff8766", fontFamily: "monospace", cursor: "pointer" }}>Ranking</span>
        </div>
      </footer>
    </div>
  );
}

function Cadastro({ onNavigate }) {
  const [form, setForm] = useState({ email: "", telefone: "", nickname: "", senha: "", instagram: "", foto: "" });
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate1 = () => {
    const e = {};
    if (!form.email.includes("@")) e.email = "Email inválido";
    if (form.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone inválido";
    if (form.nickname.length < 3) e.nickname = "Mínimo 3 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validate2 = () => {
    const e = {};
    if (form.senha.length < 6) e.senha = "Mínimo 6 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (step === 1 && validate1()) setStep(2); };
  const submit = () => {
    if (!validate2()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1800);
  };

  if (done) return (
    <AuthLayout title="CONTA CRIADA!" subtitle="Bem-vindo à arena." onNavigate={onNavigate}>
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>⚡</div>
        <p style={{ color: "#ffffff66", fontFamily: "monospace", marginBottom: 32, lineHeight: 1.7 }}>
          Sua conta foi criada com sucesso.<br />
          Agora é hora de competir.
        </p>
        <Btn large onClick={() => onNavigate("login")}>FAZER LOGIN</Btn>
      </div>
    </AuthLayout>
  );

  return (
    <AuthLayout title="CRIAR CONTA" subtitle="Entre na arena. Prove seu valor." onNavigate={onNavigate}>
      {/* Steps indicator */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        {[1, 2].map(s => (
          <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= s ? "#00ff87" : "#ffffff11", transition: "all .3s" }} />
        ))}
      </div>

      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Field label="EMAIL *" type="email" value={form.email} onChange={v => set("email", v)} error={errors.email} placeholder="seu@email.com" />
          <Field label="TELEFONE *" type="tel" value={form.telefone} onChange={v => set("telefone", v)} error={errors.telefone} placeholder="(00) 00000-0000" />
          <Field label="NICKNAME *" value={form.nickname} onChange={v => set("nickname", v)} error={errors.nickname} placeholder="SeuNome123" hint="Será exibido publicamente" />
          <Btn large onClick={next} style={{ marginTop: 8 }}>PRÓXIMO →</Btn>
          <div style={{ textAlign: "center", fontSize: 13, color: "#ffffff33", fontFamily: "monospace" }}>
            Já tem conta?{" "}
            <span style={{ color: "#00ff87", cursor: "pointer" }} onClick={() => onNavigate("login")}>ENTRAR</span>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Field label="SENHA *" type="password" value={form.senha} onChange={v => set("senha", v)} error={errors.senha} placeholder="Mínimo 6 caracteres" />
          <Field label="INSTAGRAM" value={form.instagram} onChange={v => set("instagram", v)} placeholder="@seuinstagram" hint="Opcional — para o Gol da Rodada" />
          <div style={{ background: "#00ff8708", border: "1px solid #00ff8722", borderRadius: 8, padding: 14, fontSize: 12, color: "#00ff8799", fontFamily: "monospace", lineHeight: 1.7 }}>
            Ao criar conta você concorda com os termos de uso da plataforma.
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <Btn ghost onClick={() => setStep(1)}>← VOLTAR</Btn>
            <Btn large onClick={submit} style={{ flex: 1 }} loading={loading}>
              {loading ? "CRIANDO..." : "CRIAR CONTA"}
            </Btn>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}

function Login({ onNavigate }) {
  const [form, setForm] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.email || !form.senha) { setError("Preencha todos os campos."); return; }
    setError("");
    setLoading(true);
    setTimeout(() => { setLoading(false); onNavigate("torneios"); }, 1500);
  };

  return (
    <AuthLayout title="BEM-VINDO DE VOLTA" subtitle="A arena te esperou." onNavigate={onNavigate}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Field label="EMAIL" type="email" value={form.email} onChange={v => set("email", v)} placeholder="seu@email.com" />
        <Field label="SENHA" type="password" value={form.senha} onChange={v => set("senha", v)} placeholder="••••••••" />
        {error && <div style={{ fontSize: 13, color: "#ff4444", fontFamily: "monospace" }}>⚠ {error}</div>}
        <div style={{ textAlign: "right", marginTop: -8 }}>
          <span style={{ fontSize: 12, color: "#00ff8766", fontFamily: "monospace", cursor: "pointer" }}>Esqueci minha senha</span>
        </div>
        <Btn large onClick={submit} loading={loading} style={{ marginTop: 8 }}>
          {loading ? "ENTRANDO..." : "ENTRAR →"}
        </Btn>
        <div style={{ textAlign: "center", fontSize: 13, color: "#ffffff33", fontFamily: "monospace" }}>
          Não tem conta?{" "}
          <span style={{ color: "#00ff87", cursor: "pointer" }} onClick={() => onNavigate("cadastro")}>CRIAR AGORA</span>
        </div>
      </div>
    </AuthLayout>
  );
}

function Torneios({ onNavigate }) {
  const torneios = [
    { id: 1, status: "aberto", jogadores: 9, max: 16, premio: 100, inscricao: 10 },
    { id: 2, status: "em breve", jogadores: 0, max: 16, premio: 100, inscricao: 10 },
    { id: 3, status: "ao vivo", jogadores: 16, max: 16, premio: 100, inscricao: 10 },
  ];

  const statusColor = { aberto: "#00ff87", "em breve": "#ffcc00", "ao vivo": "#ff4444" };
  const statusLabel = { aberto: "INSCRIÇÕES ABERTAS", "em breve": "EM BREVE", "ao vivo": "● AO VIVO" };

  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace" }}>👤 jogador123</span>
          <Btn ghost onClick={() => onNavigate("perfil")}>Perfil</Btn>
          <Btn ghost onClick={() => onNavigate("ranking")}>🏅 Ranking</Btn>
          <Btn ghost onClick={() => onNavigate("hallfama")}>👑 Hall</Btn>
          <Btn ghost onClick={() => onNavigate("suporte")}>Suporte</Btn>
          <Btn ghost onClick={() => onNavigate("admin")} style={{ borderColor: "#ff444433", color: "#ff4444" }}>Admin</Btn>
          <Btn ghost onClick={() => onNavigate("landing")}>Sair</Btn>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
        <SectionLabel>DREAM LEAGUE SOCCER</SectionLabel>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>Torneios</h1>
        <p style={{ color: "#ffffff33", fontFamily: "monospace", marginBottom: 40 }}>Escolha um torneio e entre na fila.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {torneios.map(t => (
            <div key={t.id} style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 12, padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 2, color: statusColor[t.status], background: `${statusColor[t.status]}18`, border: `1px solid ${statusColor[t.status]}33`, padding: "3px 10px", borderRadius: 4 }}>
                    {statusLabel[t.status]}
                  </span>
                  <span style={{ fontSize: 12, color: "#ffffff22", fontFamily: "monospace" }}>#{String(t.id).padStart(3, "0")}</span>
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 6 }}>
                  Freitas Cup — Torneio #{t.id}
                </div>
                <div style={{ display: "flex", gap: 20, fontSize: 13, fontFamily: "monospace", color: "#ffffff44" }}>
                  <span>🏆 R${t.premio}</span>
                  <span>👥 {t.jogadores}/{t.max} jogadores</span>
                  <span>⚡ Mata-mata</span>
                  <span>⏱ ~1 hora</span>
                </div>
                {t.status === "aberto" && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ height: 4, background: "#ffffff0a", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(t.jogadores / t.max) * 100}%`, background: "#00ff87", borderRadius: 2, transition: "width .5s" }} />
                    </div>
                    <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", marginTop: 4 }}>Faltam {t.max - t.jogadores} jogadores</div>
                  </div>
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", marginBottom: 6 }}>INSCRIÇÃO</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#00ff87", marginBottom: 12 }}>R${t.inscricao}</div>
                {t.status === "aberto" && <Btn onClick={() => onNavigate("regras")}>ENTRAR</Btn>}
                {t.status === "ao vivo" && <Btn ghost onClick={() => {}}>VER BRACKET</Btn>}
                {t.status === "em breve" && <Btn ghost disabled>EM BREVE</Btn>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <div style={{ width: 32, height: 32, background: "#00ff8722", border: "1px solid #00ff8744", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", letterSpacing: 1 }}>FREITAS <span style={{ color: "#00ff87" }}>CUP</span></span>
    </div>
  );
}

function Btn({ children, onClick, ghost, large, loading, disabled, style = {} }) {
  return (
    <button onClick={onClick} disabled={disabled || loading} style={{
      padding: large ? "14px 32px" : "10px 20px",
      fontSize: large ? 14 : 13,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      letterSpacing: 1,
      borderRadius: 8,
      border: ghost ? "1px solid #ffffff22" : "none",
      background: ghost ? "transparent" : (disabled ? "#ffffff11" : "#00ff87"),
      color: ghost ? "#ffffff66" : (disabled ? "#ffffff33" : "#06080c"),
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all .15s",
      whiteSpace: "nowrap",
      ...style,
    }}>
      {children}
    </button>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, error, hint }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 11, color: "#ffffff44", fontFamily: "monospace", letterSpacing: 2, marginBottom: 6 }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "#0d1117",
          border: `1px solid ${error ? "#ff444466" : "#ffffff11"}`,
          borderRadius: 8,
          padding: "12px 14px",
          color: "#fff",
          fontSize: 14,
          fontFamily: "monospace",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      {error && <div style={{ fontSize: 12, color: "#ff4444", fontFamily: "monospace", marginTop: 4 }}>⚠ {error}</div>}
      {hint && !error && <div style={{ fontSize: 12, color: "#ffffff22", fontFamily: "monospace", marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

function AuthLayout({ title, subtitle, children, onNavigate }) {
  return (
    <div style={{ minHeight: "100vh", background: "#06080c", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(#00ff8705 1px, transparent 1px), linear-gradient(90deg, #00ff8705 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, background: "radial-gradient(circle, #00ff8710 0%, transparent 70%)", pointerEvents: "none" }} />

      <nav style={{ position: "relative", zIndex: 1, padding: "20px 24px" }}>
        <span style={{ cursor: "pointer" }} onClick={() => onNavigate("landing")}><Logo /></span>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ marginBottom: 32 }}>
            <SectionLabel>{subtitle}</SectionLabel>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "#fff", letterSpacing: -1 }}>{title}</h1>
          </div>
          <div style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 16, padding: 32 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{ width: 20, height: 2, background: "#00ff87" }} />
      <span style={{ fontSize: 11, color: "#00ff87", fontFamily: "monospace", letterSpacing: 3 }}>{children}</span>
    </div>
  );
}

function PrizeStat({ label, value, accent }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: accent ? "#00ff87" : "#fff", marginBottom: 2 }}>{value}</div>
      <div style={{ fontSize: 10, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2 }}>{label}</div>
    </div>
  );
}

// ─── REGRAS ──────────────────────────────────────────────────────────────────

function Regras({ onNavigate }) {
  const [aceito, setAceito] = useState(false);
  const [lido, setLido] = useState(false);

  const regras = [
    { icon: "👥", titulo: "16 jogadores", desc: "Torneio inicia somente com 16 jogadores confirmados." },
    { icon: "⚔️", titulo: "Mata-mata 1v1", desc: "Eliminação direta. Perdeu, está fora." },
    { icon: "💸", titulo: "Inscrição R$10", desc: "Paga via Pix antes de entrar na fila." },
    { icon: "🏆", titulo: "Premiação R$100", desc: "Campeão leva tudo. Sem divisão." },
    { icon: "⏱", titulo: "Duração ~1 hora", desc: "Do início ao campeão em aproximadamente 1 hora." },
    { icon: "📸", titulo: "Print obrigatório", desc: "Você deve enviar print do resultado após cada partida." },
    { icon: "🚫", titulo: "WO automático", desc: "7 minutos para iniciar. Não apareceu? WO automático." },
    { icon: "🔒", titulo: "Sem reembolso após início", desc: "Torneio iniciado, inscrição não reembolsável." },
    { icon: "⛔", titulo: "Fraude proibida", desc: "Print editado = banimento permanente." },
    { icon: "👤", titulo: "Múltiplas contas proibidas", desc: "Uma conta por pessoa. Violação = ban." },
    { icon: "❌", titulo: "Resultado falso proibido", desc: "Declarar resultado falso = banimento imediato." },
  ];

  const handleScroll = (e) => {
    const el = e.target;
    if (el.scrollHeight - el.scrollTop <= el.clientHeight + 40) setLido(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#06080c", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(#00ff8705 1px, transparent 1px), linear-gradient(90deg, #00ff8705 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

      <nav style={{ position: "relative", zIndex: 1, borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2 }}>PASSO 1 DE 3 — REGRAS</div>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%", maxWidth: 560 }}>
          <SectionLabel>FREITAS CUP — TORNEIO #1</SectionLabel>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>
            Leia as regras
          </h1>
          <p style={{ color: "#ffffff33", fontFamily: "monospace", fontSize: 13, marginBottom: 24 }}>
            Role até o final para liberar o botão de continuar.
          </p>

          {/* Scroll box */}
          <div
            onScroll={handleScroll}
            style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 16, padding: 24, maxHeight: 360, overflowY: "auto", marginBottom: 20 }}
          >
            {regras.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: i < regras.length - 1 ? "1px solid #ffffff06" : "none" }}>
                <div style={{ fontSize: 22, minWidth: 32, textAlign: "center" }}>{r.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{r.titulo}</div>
                  <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace", lineHeight: 1.6 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkbox */}
          <div
            onClick={() => lido && setAceito(a => !a)}
            style={{ display: "flex", alignItems: "center", gap: 14, background: aceito ? "#00ff8710" : "#0d1117", border: `1px solid ${aceito ? "#00ff8744" : "#ffffff11"}`, borderRadius: 12, padding: 16, cursor: lido ? "pointer" : "not-allowed", marginBottom: 20, transition: "all .2s", opacity: lido ? 1 : 0.4 }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${aceito ? "#00ff87" : "#ffffff22"}`, background: aceito ? "#00ff87" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, transition: "all .2s", flexShrink: 0 }}>
              {aceito ? "✓" : ""}
            </div>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: aceito ? "#00ff87" : "#ffffff66", lineHeight: 1.5 }}>
              Li e concordo com todas as regras do torneio
            </span>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Btn ghost onClick={() => onNavigate("torneios")}>← VOLTAR</Btn>
            <Btn large onClick={() => onNavigate("pagamento")} disabled={!aceito} style={{ flex: 1 }}>
              CONTINUAR → PAGAMENTO
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGAMENTO ───────────────────────────────────────────────────────────────

function Pagamento({ onNavigate }) {
  const [copiado, setCopiado] = useState(false);
  const [aguardando, setAguardando] = useState(true);
  const [tempo, setTempo] = useState(15 * 60); // 15 min
  const pixCode = "00020126580014BR.GOV.BCB.PIX0136freitascup7@gmail.com5204000053039865802BR5913FREITAS CUP6009SAO PAULO62070503***6304ABCD";

  useEffect(() => {
    const t = setInterval(() => setTempo(p => p > 0 ? p - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  // Simula confirmação após 8 segundos para demo
  useEffect(() => {
    const t = setTimeout(() => { setAguardando(false); }, 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!aguardando) {
      const t = setTimeout(() => onNavigate("fila"), 2000);
      return () => clearTimeout(t);
    }
  }, [aguardando]);

  const copiar = () => {
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const min = String(Math.floor(tempo / 60)).padStart(2, "0");
  const sec = String(tempo % 60).padStart(2, "0");

  return (
    <div style={{ minHeight: "100vh", background: "#06080c", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(#00ff8705 1px, transparent 1px), linear-gradient(90deg, #00ff8705 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

      <nav style={{ position: "relative", zIndex: 1, borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2 }}>PASSO 2 DE 3 — PAGAMENTO</div>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%", maxWidth: 460 }}>

          {!aguardando ? (
            // Confirmado
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 72, marginBottom: 16 }}>✅</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: "#00ff87", marginBottom: 8 }}>PAGAMENTO CONFIRMADO!</h2>
              <p style={{ color: "#ffffff44", fontFamily: "monospace" }}>Entrando na fila do torneio...</p>
            </div>
          ) : (
            <>
              <SectionLabel>FREITAS CUP — TORNEIO #1</SectionLabel>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "#fff", marginBottom: 4, letterSpacing: -1 }}>
                Pague via Pix
              </h1>
              <p style={{ color: "#ffffff33", fontFamily: "monospace", fontSize: 13, marginBottom: 28 }}>
                QR Code expira em{" "}
                <span style={{ color: tempo < 120 ? "#ff4444" : "#00ff87", fontWeight: 700 }}>{min}:{sec}</span>
              </p>

              {/* QR Code simulado */}
              <div style={{ background: "#fff", borderRadius: 16, padding: 20, display: "inline-block", marginBottom: 24, display: "flex", justifyContent: "center" }}>
                <svg width={160} height={160} viewBox="0 0 160 160">
                  {/* QR simulado decorativo */}
                  {[...Array(8)].map((_, r) =>
                    [...Array(8)].map((_, c) => {
                      const skip = (r < 3 && c < 3) || (r < 3 && c > 4) || (r > 4 && c < 3);
                      const on = skip ? (r === 0 || r === 2 || c === 0 || c === 2) && !(r === 1 && c === 1) : Math.random() > 0.5;
                      return on ? <rect key={`${r}-${c}`} x={c * 20} y={r * 20} width={18} height={18} fill="#06080c" rx={2} /> : null;
                    })
                  )}
                  {/* Cantos */}
                  <rect x={0} y={0} width={58} height={58} rx={6} fill="none" stroke="#06080c" strokeWidth={4} />
                  <rect x={102} y={0} width={58} height={58} rx={6} fill="none" stroke="#06080c" strokeWidth={4} />
                  <rect x={0} y={102} width={58} height={58} rx={6} fill="none" stroke="#06080c" strokeWidth={4} />
                  <rect x={8} y={8} width={42} height={42} rx={4} fill="#06080c" />
                  <rect x={110} y={8} width={42} height={42} rx={4} fill="#06080c" />
                  <rect x={8} y={110} width={42} height={42} rx={4} fill="#06080c" />
                  <rect x={18} y={18} width={22} height={22} rx={2} fill="#fff" />
                  <rect x={120} y={18} width={22} height={22} rx={2} fill="#fff" />
                  <rect x={18} y={120} width={22} height={22} rx={2} fill="#fff" />
                </svg>
              </div>

              {/* Resumo */}
              <div style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "#ffffff44", fontFamily: "monospace", fontSize: 13 }}>Valor</span>
                  <span style={{ color: "#00ff87", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20 }}>R$ 10,00</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "#ffffff44", fontFamily: "monospace", fontSize: 13 }}>Chave Pix</span>
                  <span style={{ color: "#fff", fontFamily: "monospace", fontSize: 13 }}>freitascup7@gmail.com</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#ffffff44", fontFamily: "monospace", fontSize: 13 }}>Beneficiário</span>
                  <span style={{ color: "#fff", fontFamily: "monospace", fontSize: 13 }}>FREITAS CUP</span>
                </div>
              </div>

              {/* Copiar código */}
              <button
                onClick={copiar}
                style={{ width: "100%", background: copiado ? "#00ff8722" : "#0d1117", border: `1px solid ${copiado ? "#00ff8744" : "#ffffff11"}`, borderRadius: 10, padding: "13px 16px", color: copiado ? "#00ff87" : "#ffffff66", fontFamily: "monospace", fontSize: 13, cursor: "pointer", marginBottom: 12, transition: "all .2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              >
                {copiado ? "✓ CÓDIGO COPIADO!" : "📋 COPIAR CÓDIGO PIX"}
              </button>

              <div style={{ background: "#ffcc0012", border: "1px solid #ffcc0033", borderRadius: 10, padding: "12px 16px", fontSize: 12, color: "#ffcc0099", fontFamily: "monospace", lineHeight: 1.6, textAlign: "center" }}>
                ⏳ Aguardando confirmação automática do pagamento...
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── FILA ─────────────────────────────────────────────────────────────────────

function Fila({ onNavigate }) {
  const [jogadores, setJogadores] = useState(13);
  const [tempo, setTempo] = useState(0);
  const max = 16;

  useEffect(() => {
    const t = setInterval(() => setTempo(p => p + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Simula jogadores entrando
  useEffect(() => {
    if (jogadores >= max) return;
    const t = setTimeout(() => setJogadores(p => Math.min(p + 1, max)), 3000);
    return () => clearTimeout(t);
  }, [jogadores]);

  const min = String(Math.floor(tempo / 60)).padStart(2, "0");
  const sec = String(tempo % 60).padStart(2, "0");
  const lotado = jogadores >= max;

  return (
    <div style={{ minHeight: "100vh", background: "#06080c", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(#00ff8705 1px, transparent 1px), linear-gradient(90deg, #00ff8705 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

      <nav style={{ position: "relative", zIndex: 1, borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2 }}>PASSO 3 DE 3 — AGUARDANDO</div>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%", maxWidth: 480, textAlign: "center" }}>

          {lotado ? (
            <>
              <div style={{ fontSize: 64, marginBottom: 16 }}>⚡</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#00ff87", marginBottom: 8, letterSpacing: -1 }}>TORNEIO LOTADO!</h2>
              <p style={{ color: "#ffffff44", fontFamily: "monospace", marginBottom: 32 }}>Chaveamento sendo criado...</p>
              <Btn large onClick={() => onNavigate("torneios")}>VER BRACKET →</Btn>
            </>
          ) : (
            <>
              <SectionLabel>FREITAS CUP — TORNEIO #1</SectionLabel>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>
                Aguardando<br /><span style={{ color: "#00ff87" }}>jogadores</span>
              </h1>
              <p style={{ color: "#ffffff33", fontFamily: "monospace", fontSize: 13, marginBottom: 40 }}>
                Fique nessa tela. O torneio inicia automaticamente.
              </p>

              {/* Contador principal */}
              <div style={{ background: "#0d1117", border: "1px solid #00ff8722", borderRadius: 20, padding: "40px 40px 32px", marginBottom: 24 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 80, color: "#00ff87", lineHeight: 1, marginBottom: 4, textShadow: "0 0 40px #00ff8744" }}>
                  {jogadores}<span style={{ fontSize: 40, color: "#ffffff22" }}>/{max}</span>
                </div>
                <div style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 3, marginBottom: 28 }}>JOGADORES NA FILA</div>

                {/* Barra */}
                <div style={{ height: 6, background: "#ffffff0a", borderRadius: 3, overflow: "hidden", marginBottom: 12 }}>
                  <div style={{ height: "100%", width: `${(jogadores / max) * 100}%`, background: "linear-gradient(90deg, #00ff87, #00cc6a)", borderRadius: 3, transition: "width 1s ease" }} />
                </div>
                <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace" }}>
                  Faltam <span style={{ color: "#fff", fontWeight: 700 }}>{max - jogadores} jogadores</span>
                </div>
              </div>

              {/* Avatares */}
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                {[...Array(max)].map((_, i) => (
                  <div key={i} style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: i < jogadores ? "#00ff8722" : "#ffffff08",
                    border: `2px solid ${i < jogadores ? "#00ff8744" : "#ffffff0a"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, transition: "all .5s",
                  }}>
                    {i < jogadores ? "👤" : ""}
                  </div>
                ))}
              </div>

              {/* Timer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, color: "#ffffff33", fontFamily: "monospace" }}>
                <span>⏱</span>
                <span>Aguardando há</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>{min}:{sec}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── BRACKET ─────────────────────────────────────────────────────────────────

const JOGADORES_INICIAIS = [
  "ThunderKing","NeonWolf","IronFist","StormFC",
  "BlazeMaster","FrostByte","GalaxyX","você 🟢",
  "CyberUnit","PhantomFC","RocketMan","DarkStar",
  "VoltageFC","ShadowBoy","EliteShot","BravoFC",
];

function gerarBracket(jogadores) {
  // Oitavas: 8 confrontos
  const oitavas = [];
  for (let i = 0; i < 8; i++) {
    oitavas.push({
      id: i,
      j1: jogadores[i * 2],
      j2: jogadores[i * 2 + 1],
      vencedor: i < 5 ? (i % 2 === 0 ? jogadores[i * 2] : jogadores[i * 2 + 1]) : null,
    });
  }
  const vOitavas = oitavas.map(m => m.vencedor);

  // Quartas: 4 confrontos
  const quartas = [];
  for (let i = 0; i < 4; i++) {
    quartas.push({
      id: i,
      j1: vOitavas[i * 2] || "?",
      j2: vOitavas[i * 2 + 1] || "?",
      vencedor: i < 2 ? vOitavas[i * 2] : null,
    });
  }
  const vQuartas = quartas.map(m => m.vencedor);

  // Semi: 2 confrontos
  const semi = [
    { id: 0, j1: vQuartas[0] || "?", j2: vQuartas[1] || "?", vencedor: null },
    { id: 1, j1: vQuartas[2] || "?", j2: vQuartas[3] || "?", vencedor: null },
  ];

  // Final
  const final = [{ id: 0, j1: "?", j2: "?", vencedor: null }];

  return { oitavas, quartas, semi, final };
}

function MatchCard({ match, isUser, onJogar, rodada }) {
  const userJ1 = match.j1?.includes("você");
  const userJ2 = match.j2?.includes("você");
  const isActive = (userJ1 || userJ2) && !match.vencedor && rodada === "oitavas";

  return (
    <div style={{
      background: isActive ? "#00ff8710" : "#0d1117",
      border: `1px solid ${isActive ? "#00ff8744" : match.vencedor ? "#ffffff08" : "#ffffff11"}`,
      borderRadius: 10, overflow: "hidden", minWidth: 160,
      boxShadow: isActive ? "0 0 20px #00ff8720" : "none",
    }}>
      {isActive && (
        <div style={{ background: "#00ff8722", padding: "4px 10px", fontSize: 10, color: "#00ff87", fontFamily: "monospace", letterSpacing: 2, textAlign: "center" }}>
          ● SUA PARTIDA
        </div>
      )}
      {[match.j1, match.j2].map((j, i) => {
        const isWinner = match.vencedor === j;
        const isMe = j?.includes("você");
        return (
          <div key={i} style={{
            padding: "9px 12px",
            borderBottom: i === 0 ? "1px solid #ffffff08" : "none",
            display: "flex", alignItems: "center", gap: 8,
            background: isWinner ? "#00ff8710" : "transparent",
            opacity: match.vencedor && !isWinner ? 0.35 : 1,
          }}>
            <span style={{ fontSize: 11 }}>{isMe ? "🟢" : "👤"}</span>
            <span style={{
              fontFamily: isMe ? "'Syne', sans-serif" : "monospace",
              fontWeight: isMe ? 700 : 400,
              fontSize: 12,
              color: isWinner ? "#00ff87" : isMe ? "#fff" : "#ffffff88",
              flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>{j || "?"}</span>
            {isWinner && <span style={{ fontSize: 10, color: "#00ff87" }}>✓</span>}
          </div>
        );
      })}
      {isActive && (
        <div style={{ padding: "8px 10px" }}>
          <button onClick={onJogar} style={{
            width: "100%", background: "#00ff87", border: "none", borderRadius: 6,
            padding: "7px 0", fontSize: 11, fontFamily: "'Syne', sans-serif",
            fontWeight: 700, color: "#06080c", cursor: "pointer", letterSpacing: 1,
          }}>JOGAR →</button>
        </div>
      )}
    </div>
  );
}

function RodadaColuna({ label, matches, isUser, onJogar, rodadaKey, rodadaAtiva }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center", minWidth: 180 }}>
      <div style={{ fontSize: 10, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 3, marginBottom: 16, textAlign: "center" }}>{label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
        {matches.map((m, i) => (
          <MatchCard key={i} match={m} isUser={isUser} onJogar={onJogar} rodada={rodadaKey} />
        ))}
      </div>
    </div>
  );
}

function Bracket({ onNavigate }) {
  const bracket = gerarBracket(JOGADORES_INICIAIS);

  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ fontSize: 11, background: "#00ff8720", border: "1px solid #00ff8733", color: "#00ff87", padding: "4px 12px", borderRadius: 4, fontFamily: "monospace", letterSpacing: 2 }}>● AO VIVO</div>
          <Btn ghost onClick={() => onNavigate("torneios")}>← TORNEIOS</Btn>
        </div>
      </nav>

      <div style={{ padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>FREITAS CUP — TORNEIO #1</SectionLabel>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: "#fff", letterSpacing: -1 }}>Bracket</h1>
            <div style={{ display: "flex", gap: 20, fontSize: 13, fontFamily: "monospace" }}>
              <span style={{ color: "#ffffff33" }}>👥 16 jogadores</span>
              <span style={{ color: "#ffffff33" }}>🏆 R$100</span>
              <span style={{ color: "#00ff87" }}>⚡ Rodada: Oitavas</span>
            </div>
          </div>

          {/* Sua partida destaque */}
          <div style={{ background: "#00ff8710", border: "1px solid #00ff8733", borderRadius: 14, padding: "16px 24px", marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: "#00ff8777", fontFamily: "monospace", letterSpacing: 2, marginBottom: 4 }}>SUA PARTIDA AGORA</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>
                você 🟢 <span style={{ color: "#ffffff33" }}>vs</span> BravoFC
              </div>
            </div>
            <Btn large onClick={() => onNavigate("partida")}>ENTRAR NA PARTIDA →</Btn>
          </div>

          {/* Bracket scroll */}
          <div style={{ overflowX: "auto", paddingBottom: 24 }}>
            <div style={{ display: "flex", gap: 32, minWidth: 800, alignItems: "flex-start" }}>
              <RodadaColuna label="OITAVAS DE FINAL" matches={bracket.oitavas} rodadaKey="oitavas" onJogar={() => onNavigate("partida")} />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 32, color: "#ffffff11", fontSize: 20 }}>→</div>
              <RodadaColuna label="QUARTAS DE FINAL" matches={bracket.quartas} rodadaKey="quartas" />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 32, color: "#ffffff11", fontSize: 20 }}>→</div>
              <RodadaColuna label="SEMIFINAL" matches={bracket.semi} rodadaKey="semi" />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 32, color: "#ffffff11", fontSize: 20 }}>→</div>
              <RodadaColuna label="FINAL" matches={bracket.final} rodadaKey="final" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PARTIDA ──────────────────────────────────────────────────────────────────

function Partida({ onNavigate }) {
  const [fase, setFase] = useState("aguardando"); // aguardando | jogando | print | confirmando | done
  const [timer, setTimer] = useState(7 * 60);
  const [printEnviado, setPrintEnviado] = useState(false);
  const [confirmado, setConfirmado] = useState(false);
  const codigo = "FC-8X42-K9";

  useEffect(() => {
    if (fase !== "aguardando" && fase !== "jogando") return;
    if (timer <= 0) { setFase("wo"); return; }
    const t = setInterval(() => setTimer(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [fase, timer]);

  const min = String(Math.floor(timer / 60)).padStart(2, "0");
  const sec = String(timer % 60).padStart(2, "0");
  const urgente = timer < 60;

  const estados = ["aguardando","jogando","print","confirmando","done"];
  const estadoIdx = estados.indexOf(fase);

  return (
    <div style={{ minHeight: "100vh", background: "#06080c", display: "flex", flexDirection: "column" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ display: "flex", gap: 8 }}>
          {["Aguardando","Jogando","Print","Confirmando","Finalizado"].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: i <= estadoIdx ? "#00ff87" : "#ffffff11", transition: "all .3s" }} />
              <span style={{ fontSize: 10, color: i <= estadoIdx ? "#00ff8799" : "#ffffff22", fontFamily: "monospace", display: window.innerWidth < 600 ? "none" : "inline" }}>{s}</span>
              {i < 4 && <span style={{ color: "#ffffff11", fontSize: 10 }}>·</span>}
            </div>
          ))}
        </div>
        <Btn ghost onClick={() => onNavigate("bracket")}>VER BRACKET</Btn>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ width: "100%", maxWidth: 480 }}>

          {/* VS header */}
          <div style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 14, padding: "20px 24px", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#00ff87", fontFamily: "monospace", marginBottom: 4 }}>VOCÊ</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>você 🟢</div>
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#ffffff22" }}>VS</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", marginBottom: 4 }}>ADVERSÁRIO</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>BravoFC</div>
            </div>
          </div>

          {/* FASE: aguardando */}
          {fase === "aguardando" && (
            <div style={{ background: "#0d1117", border: "1px solid #00ff8733", borderRadius: 14, padding: 28, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#00ff8777", fontFamily: "monospace", letterSpacing: 2, marginBottom: 20 }}>CÓDIGO PRIVADO DA PARTIDA</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#00ff87", letterSpacing: 6, marginBottom: 8, textShadow: "0 0 30px #00ff8744" }}>{codigo}</div>
              <div style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace", marginBottom: 24, lineHeight: 1.7 }}>
                Use este código no Dream League Soccer<br />para encontrar seu adversário.
              </div>
              <div style={{ background: urgente ? "#ff444420" : "#ffcc0015", border: `1px solid ${urgente ? "#ff444444" : "#ffcc0033"}`, borderRadius: 10, padding: "12px 16px", marginBottom: 20 }}>
                <div style={{ fontSize: 11, color: urgente ? "#ff4444aa" : "#ffcc0088", fontFamily: "monospace", letterSpacing: 2, marginBottom: 4 }}>TEMPO PARA INICIAR</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 44, color: urgente ? "#ff4444" : "#ffcc00" }}>{min}:{sec}</div>
              </div>
              <Btn large onClick={() => { setFase("jogando"); setTimer(60); }}>JÁ ENTREI NO JOGO →</Btn>
            </div>
          )}

          {/* FASE: jogando */}
          {fase === "jogando" && (
            <div style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 14, padding: 28, textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>⚽</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 8 }}>Partida em andamento</div>
              <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace", marginBottom: 24, lineHeight: 1.7 }}>
                Jogue e ao terminar, envie o print do resultado.
              </div>
              <div style={{ background: "#0a0f1a", border: "1px solid #ffffff08", borderRadius: 10, padding: "10px 16px", marginBottom: 24, fontFamily: "monospace", fontSize: 13, color: "#ffffff44" }}>
                Código: <span style={{ color: "#00ff87", fontWeight: 700 }}>{codigo}</span>
              </div>
              <Btn large onClick={() => setFase("print")}>PARTIDA ENCERRADA → ENVIAR PRINT</Btn>
            </div>
          )}

          {/* FASE: print */}
          {fase === "print" && (
            <div style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 14, padding: 28 }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff", marginBottom: 4 }}>Enviar resultado</div>
              <div style={{ fontSize: 13, color: "#ffffff33", fontFamily: "monospace", marginBottom: 24 }}>Tire print da tela de resultado e envie abaixo.</div>

              {!printEnviado ? (
                <div
                  onClick={() => setPrintEnviado(true)}
                  style={{ border: "2px dashed #ffffff11", borderRadius: 12, padding: "48px 24px", textAlign: "center", cursor: "pointer", marginBottom: 20, transition: "all .2s" }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>📸</div>
                  <div style={{ fontFamily: "monospace", fontSize: 13, color: "#ffffff33" }}>Clique para selecionar o print</div>
                  <div style={{ fontSize: 11, color: "#ffffff1a", marginTop: 8, fontFamily: "monospace" }}>PNG, JPG • Máx 10MB</div>
                </div>
              ) : (
                <div style={{ background: "#00ff8715", border: "1px solid #00ff8733", borderRadius: 12, padding: 20, textAlign: "center", marginBottom: 20 }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#00ff87" }}>Print carregado!</div>
                  <div style={{ fontSize: 12, color: "#ffffff44", fontFamily: "monospace", marginTop: 4 }}>resultado_partida.jpg</div>
                </div>
              )}

              <div style={{ background: "#ffcc0012", border: "1px solid #ffcc0022", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#ffcc0077", fontFamily: "monospace", marginBottom: 20, lineHeight: 1.6 }}>
                ⚠ Print editado = banimento permanente
              </div>
              <Btn large onClick={() => setFase("confirmando")} disabled={!printEnviado} style={{ width: "100%" }}>
                ENVIAR RESULTADO →
              </Btn>
            </div>
          )}

          {/* FASE: confirmando */}
          {fase === "confirmando" && (
            <div style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 14, padding: 28, textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#fff", marginBottom: 8 }}>Aguardando confirmação</div>
              <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace", lineHeight: 1.7, marginBottom: 28 }}>
                Seu print foi enviado.<br />BravoFC precisa confirmar o resultado.
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "#00ff8715", border: "1px solid #00ff8733", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>✅</div>
                  <div style={{ fontSize: 11, color: "#00ff87", fontFamily: "monospace" }}>VOCÊ<br />confirmou</div>
                </div>
                <div style={{ flex: 1, background: "#ffcc0012", border: "1px solid #ffcc0033", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>⏳</div>
                  <div style={{ fontSize: 11, color: "#ffcc0099", fontFamily: "monospace" }}>BRAVOFC<br />pendente</div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Btn ghost onClick={() => setFase("done")} style={{ width: "100%", fontSize: 12 }}>
                  Simular: adversário confirmou ✓
                </Btn>
              </div>
            </div>
          )}

          {/* FASE: done */}
          {fase === "done" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 72, marginBottom: 16 }}>🏆</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#00ff87", marginBottom: 8, letterSpacing: -1 }}>
                VOCÊ AVANÇOU!
              </h2>
              <div style={{ fontSize: 14, color: "#ffffff44", fontFamily: "monospace", marginBottom: 32, lineHeight: 1.7 }}>
                Próxima rodada: Quartas de Final<br />
                Aguarde 5 minutos para a próxima partida.
              </div>
              <Btn large onClick={() => onNavigate("bracket")}>VER BRACKET ATUALIZADO →</Btn>
            </div>
          )}

          {fase === "wo" && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 72, marginBottom: 16 }}>❌</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "#ff4444", marginBottom: 8 }}>WO AUTOMÁTICO</h2>
              <div style={{ fontSize: 14, color: "#ffffff44", fontFamily: "monospace", marginBottom: 32 }}>Tempo esgotado. Você foi eliminado.</div>
              <Btn ghost onClick={() => onNavigate("torneios")}>← VOLTAR AOS TORNEIOS</Btn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── ADMIN ───────────────────────────────────────────────────────────────────

const PAGAMENTOS_MOCK = [
  { id: "001", user: "ThunderKing", valor: 10, status: "pendente", hora: "14:32" },
  { id: "002", user: "NeonWolf",    valor: 10, status: "pendente", hora: "14:33" },
  { id: "003", user: "IronFist",    valor: 10, status: "confirmado", hora: "14:20" },
  { id: "004", user: "StormFC",     valor: 10, status: "confirmado", hora: "14:18" },
  { id: "005", user: "BlazeMaster", valor: 10, status: "reembolsado", hora: "13:55" },
];

const DISPUTAS_MOCK = [
  { id: "D01", partida: "ThunderKing vs NeonWolf", rodada: "Oitavas", motivo: "Prints divergentes", hora: "14:41" },
  { id: "D02", partida: "IronFist vs StormFC",     rodada: "Quartas",  motivo: "Adversário não apareceu", hora: "14:50" },
];

const USUARIOS_MOCK = [
  { nick: "ThunderKing", email: "thunder@email.com", vitorias: 8, status: "ativo" },
  { nick: "NeonWolf",    email: "neon@email.com",    vitorias: 5, status: "ativo" },
  { nick: "FraudBot",    email: "fraud@email.com",   vitorias: 0, status: "banido" },
];

function Admin({ onNavigate }) {
  const [aba, setAba] = useState("dashboard");
  const [pagamentos, setPagamentos] = useState(PAGAMENTOS_MOCK);
  const [disputas, setDisputas] = useState(DISPUTAS_MOCK);
  const [usuarios, setUsuarios] = useState(USUARIOS_MOCK);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const confirmarPag = (id) => {
    setPagamentos(p => p.map(x => x.id === id ? { ...x, status: "confirmado" } : x));
    showToast("✅ Pagamento confirmado!");
  };
  const reembolsar = (id) => {
    setPagamentos(p => p.map(x => x.id === id ? { ...x, status: "reembolsado" } : x));
    showToast("↩️ Reembolso processado!");
  };
  const resolverDisputa = (id, vencedor) => {
    setDisputas(p => p.filter(x => x.id !== id));
    showToast(`⚔️ Disputa resolvida: ${vencedor} avança!`);
  };
  const banir = (nick) => {
    setUsuarios(p => p.map(x => x.nick === nick ? { ...x, status: "banido" } : x));
    showToast(`🚫 ${nick} banido!`);
  };

  const pendentes = pagamentos.filter(p => p.status === "pendente").length;
  const confirmados = pagamentos.filter(p => p.status === "confirmado").length;

  const abas = [
    { k: "dashboard", label: "📊 Dashboard" },
    { k: "pagamentos", label: "💸 Pagamentos" },
    { k: "disputas", label: "⚔️ Disputas" },
    { k: "usuarios", label: "👥 Usuários" },
    { k: "logs", label: "📋 Logs" },
  ];

  const statusColor = { confirmado: "#00ff87", pendente: "#ffcc00", reembolsado: "#888", banido: "#ff4444", ativo: "#00ff87" };

  return (
    <div style={{ minHeight: "100vh", background: "#06080c", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #ff444422", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d0a0a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo />
          <div style={{ background: "#ff444420", border: "1px solid #ff444433", borderRadius: 4, padding: "3px 10px", fontSize: 10, color: "#ff4444", fontFamily: "monospace", letterSpacing: 2 }}>ADMIN</div>
        </div>
        <Btn ghost onClick={() => onNavigate("landing")}>← SAIR DO ADMIN</Btn>
      </nav>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: 200, borderRight: "1px solid #ffffff08", padding: 12, display: "flex", flexDirection: "column", gap: 4, background: "#0a0808" }}>
          {abas.map(a => (
            <button key={a.k} onClick={() => setAba(a.k)} style={{
              background: aba === a.k ? "#ff444415" : "transparent",
              border: aba === a.k ? "1px solid #ff444433" : "1px solid transparent",
              borderRadius: 8, padding: "10px 12px", textAlign: "left",
              color: aba === a.k ? "#ff8888" : "#ffffff44",
              fontSize: 13, cursor: "pointer", fontFamily: "monospace", display: "flex", alignItems: "center", gap: 8,
            }}>{a.label}</button>
          ))}
          {pendentes > 0 && (
            <div style={{ marginTop: 8, background: "#ffcc0015", border: "1px solid #ffcc0033", borderRadius: 8, padding: "10px 12px", fontSize: 12, color: "#ffcc0099", fontFamily: "monospace" }}>
              ⚠ {pendentes} pagamento{pendentes > 1 ? "s" : ""} pendente{pendentes > 1 ? "s" : ""}
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div style={{ flex: 1, padding: 28, overflowY: "auto" }}>

          {/* DASHBOARD */}
          {aba === "dashboard" && (
            <div>
              <SectionLabel>VISÃO GERAL</SectionLabel>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 24 }}>Dashboard</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}>
                {[
                  { label: "PAGAMENTOS PENDENTES", value: pendentes, color: "#ffcc00" },
                  { label: "CONFIRMADOS HOJE", value: confirmados, color: "#00ff87" },
                  { label: "DISPUTAS ABERTAS", value: disputas.length, color: "#ff4444" },
                  { label: "RECEITA HOJE", value: `R$${confirmados * 10}`, color: "#00ff87" },
                ].map((s, i) => (
                  <div key={i} style={{ background: "#0d1117", border: `1px solid ${s.color}22`, borderRadius: 12, padding: 20 }}>
                    <div style={{ fontSize: 10, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 8 }}>{s.label}</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>TORNEIO ATIVO</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>Freitas Cup — Torneio #1</div>
                    <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace", marginTop: 4 }}>Dream League Soccer · 16 jogadores · Rodada: Oitavas</div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Btn ghost onClick={() => showToast("Torneio cancelado!")}>Cancelar</Btn>
                    <Btn onClick={() => onNavigate("bracket")}>Ver Bracket</Btn>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGAMENTOS */}
          {aba === "pagamentos" && (
            <div>
              <SectionLabel>FINANCEIRO</SectionLabel>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 24 }}>Pagamentos</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {pagamentos.map(p => (
                  <div key={p.id} style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ display: "flex", align: "center", gap: 16, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 12, color: "#ffffff22" }}>#{p.id}</span>
                      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff" }}>{p.user}</span>
                      <span style={{ fontFamily: "monospace", fontSize: 13, color: "#00ff87" }}>R${p.valor}</span>
                      <span style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace" }}>{p.hora}</span>
                      <span style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 1, color: statusColor[p.status] || "#fff", background: `${statusColor[p.status]}15`, padding: "2px 10px", borderRadius: 4 }}>{p.status.toUpperCase()}</span>
                    </div>
                    {p.status === "pendente" && (
                      <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => reembolsar(p.id)} style={{ background: "transparent", border: "1px solid #ff444433", borderRadius: 6, padding: "6px 12px", color: "#ff4444", fontFamily: "monospace", fontSize: 12, cursor: "pointer" }}>Reembolsar</button>
                        <button onClick={() => confirmarPag(p.id)} style={{ background: "#00ff8722", border: "1px solid #00ff8744", borderRadius: 6, padding: "6px 12px", color: "#00ff87", fontFamily: "monospace", fontSize: 12, cursor: "pointer" }}>✓ Confirmar</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DISPUTAS */}
          {aba === "disputas" && (
            <div>
              <SectionLabel>REVISÃO</SectionLabel>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 24 }}>Disputas</h2>
              {disputas.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0", color: "#ffffff22" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                  <div style={{ fontFamily: "monospace" }}>Nenhuma disputa aberta</div>
                </div>
              ) : disputas.map(d => (
                <div key={d.id} style={{ background: "#0d1117", border: "1px solid #ff444422", borderRadius: 12, padding: 20, marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 4 }}>{d.partida}</div>
                      <div style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace" }}>{d.rodada} · {d.hora} · {d.motivo}</div>
                    </div>
                    <span style={{ fontSize: 10, color: "#ff4444", background: "#ff444420", border: "1px solid #ff444433", padding: "3px 10px", borderRadius: 4, fontFamily: "monospace", letterSpacing: 1, alignSelf: "flex-start" }}>EM REVISÃO</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, color: "#ffffff44", fontFamily: "monospace", alignSelf: "center" }}>Avançar:</span>
                    {d.partida.split(" vs ").map(j => (
                      <button key={j} onClick={() => resolverDisputa(d.id, j)} style={{ background: "#00ff8715", border: "1px solid #00ff8733", borderRadius: 6, padding: "7px 14px", color: "#00ff87", fontFamily: "monospace", fontSize: 12, cursor: "pointer" }}>
                        ✓ {j}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* USUÁRIOS */}
          {aba === "usuarios" && (
            <div>
              <SectionLabel>GERENCIAR</SectionLabel>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 24 }}>Usuários</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {usuarios.map(u => (
                  <div key={u.nick} style={{ background: "#0d1117", border: `1px solid ${u.status === "banido" ? "#ff444422" : "#ffffff08"}`, borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#ffffff0a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👤</div>
                      <div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: u.status === "banido" ? "#ffffff33" : "#fff" }}>{u.nick}</div>
                        <div style={{ fontSize: 12, color: "#ffffff22", fontFamily: "monospace" }}>{u.email}</div>
                      </div>
                      <span style={{ fontSize: 11, fontFamily: "monospace", color: statusColor[u.status], background: `${statusColor[u.status]}15`, padding: "2px 10px", borderRadius: 4 }}>{u.status.toUpperCase()}</span>
                      <span style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace" }}>🏆 {u.vitorias} vitórias</span>
                    </div>
                    {u.status !== "banido" && (
                      <button onClick={() => banir(u.nick)} style={{ background: "transparent", border: "1px solid #ff444433", borderRadius: 6, padding: "6px 14px", color: "#ff4444", fontFamily: "monospace", fontSize: 12, cursor: "pointer" }}>🚫 Banir</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LOGS */}
          {aba === "logs" && (
            <div>
              <SectionLabel>HISTÓRICO</SectionLabel>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 24 }}>Logs do Sistema</h2>
              <div style={{ background: "#0a0f0a", border: "1px solid #00ff8711", borderRadius: 12, padding: 20, fontFamily: "monospace", fontSize: 12 }}>
                {[
                  { t: "14:52", cor: "#00ff87", msg: "pagamento_confirmado · IronFist · R$10 · torneio#1" },
                  { t: "14:51", cor: "#00ff87", msg: "entrou_fila · NeonWolf · torneio#1" },
                  { t: "14:50", cor: "#ff4444", msg: "disputa_aberta · IronFist vs StormFC · prints divergentes" },
                  { t: "14:48", cor: "#00ff87", msg: "resultado_confirmado · ThunderKing avança · oitavas" },
                  { t: "14:47", cor: "#ffcc00", msg: "print_enviado · ThunderKing · partida#4" },
                  { t: "14:45", cor: "#00ff87", msg: "partida_iniciada · ThunderKing vs NeonWolf · codigo FC-8X42-K9" },
                  { t: "14:40", cor: "#00ff87", msg: "torneio_iniciado · torneio#1 · 16 jogadores confirmados" },
                  { t: "14:33", cor: "#ffcc00", msg: "pagamento_pendente · NeonWolf · R$10 · aguardando confirmação" },
                  { t: "14:32", cor: "#ffcc00", msg: "pagamento_pendente · ThunderKing · R$10 · aguardando confirmação" },
                  { t: "14:20", cor: "#888",    msg: "reembolso_solicitado · BlazeMaster · fila não fechou" },
                  { t: "14:10", cor: "#00ff87", msg: "cadastro · FrostByte · frostbyte@email.com" },
                  { t: "13:55", cor: "#ff4444", msg: "usuario_banido · FraudBot · print editado detectado" },
                ].map((l, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, padding: "6px 0", borderBottom: "1px solid #ffffff05" }}>
                    <span style={{ color: "#ffffff22", minWidth: 40 }}>{l.t}</span>
                    <span style={{ color: l.cor }}>▸</span>
                    <span style={{ color: "#ffffff66" }}>{l.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div style={{ position: "fixed", bottom: 24, right: 24, background: "#0d1117", border: "1px solid #00ff8744", borderRadius: 10, padding: "14px 20px", color: "#fff", fontSize: 14, fontFamily: "monospace", zIndex: 200 }}>
          {toast}
        </div>
      )}
    </div>
  );
}

// ─── PERFIL & RANKING ─────────────────────────────────────────────────────────

const RANKING_MOCK = [
  { pos: 1,  nick: "ThunderKing", pontos: 1240, vitorias: 18, derrotas: 3,  winrate: 86, seq: 5 },
  { pos: 2,  nick: "NeonWolf",    pontos: 980,  vitorias: 14, derrotas: 5,  winrate: 74, seq: 2 },
  { pos: 3,  nick: "IronFist",    pontos: 870,  vitorias: 12, derrotas: 4,  winrate: 75, seq: 3 },
  { pos: 4,  nick: "StormFC",     pontos: 740,  vitorias: 10, derrotas: 6,  winrate: 63, seq: 0 },
  { pos: 5,  nick: "BlazeMaster", pontos: 620,  vitorias: 9,  derrotas: 7,  winrate: 56, seq: 1 },
  { pos: 6,  nick: "você 🟢",     pontos: 580,  vitorias: 8,  derrotas: 6,  winrate: 57, seq: 2 },
  { pos: 7,  nick: "GalaxyX",     pontos: 510,  vitorias: 7,  derrotas: 8,  winrate: 47, seq: 0 },
  { pos: 8,  nick: "FrostByte",   pontos: 440,  vitorias: 6,  derrotas: 9,  winrate: 40, seq: 0 },
];

function Perfil({ onNavigate }) {
  const eu = RANKING_MOCK.find(r => r.nick.includes("você"));
  const badges = [
    { icon: "🏆", label: "1º Lugar", desc: "Ganhou um torneio" },
    { icon: "⚡", label: "Sequência x2", desc: "2 vitórias seguidas" },
    { icon: "🎯", label: "Estreante", desc: "Primeiro torneio" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ display: "flex", gap: 8 }}>
          <Btn ghost onClick={() => onNavigate("ranking")}>🏅 Ranking</Btn>
          <Btn ghost onClick={() => onNavigate("torneios")}>Torneios</Btn>
        </div>
      </nav>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px" }}>
        {/* Header perfil */}
        <div style={{ background: "#0d1117", border: "1px solid #00ff8722", borderRadius: 16, padding: 28, marginBottom: 20, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#00ff8722", border: "3px solid #00ff8744", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 4 }}>você 🟢</div>
            <div style={{ fontSize: 13, color: "#ffffff33", fontFamily: "monospace", marginBottom: 8 }}>Membro desde Jun 2025</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#00ff8715", border: "1px solid #00ff8733", borderRadius: 6, padding: "4px 12px" }}>
              <span style={{ fontSize: 12, color: "#00ff87", fontFamily: "monospace" }}>#{eu.pos} NO RANKING</span>
            </div>
          </div>
          <Btn ghost onClick={() => {}}>Editar Perfil</Btn>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          {[
            { label: "PONTOS", value: eu.pontos, color: "#00ff87" },
            { label: "VITÓRIAS", value: eu.vitorias, color: "#00ff87" },
            { label: "DERROTAS", value: eu.derrotas, color: "#ff4444" },
            { label: "WINRATE", value: `${eu.winrate}%`, color: "#ffcc00" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 14, padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>CONQUISTAS</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {badges.map((b, i) => (
              <div key={i} style={{ background: "#ffffff06", border: "1px solid #ffffff11", borderRadius: 10, padding: "12px 16px", textAlign: "center", minWidth: 90 }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{b.icon}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, color: "#fff", marginBottom: 2 }}>{b.label}</div>
                <div style={{ fontSize: 10, color: "#ffffff33", fontFamily: "monospace" }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Histórico */}
        <div style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 14, padding: 20 }}>
          <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>HISTÓRICO RECENTE</div>
          {[
            { torneio: "Freitas Cup #8", resultado: "Campeão 🏆", pontos: "+120", cor: "#00ff87" },
            { torneio: "Freitas Cup #7", resultado: "Semi Final", pontos: "+40",  cor: "#ffcc00" },
            { torneio: "Freitas Cup #6", resultado: "Quartas",    pontos: "+20",  cor: "#ffcc00" },
            { torneio: "Freitas Cup #5", resultado: "Oitavas",    pontos: "+10",  cor: "#ffffff44" },
          ].map((h, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 3 ? "1px solid #ffffff06" : "none" }}>
              <span style={{ fontFamily: "monospace", fontSize: 13, color: "#ffffff66" }}>{h.torneio}</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: h.cor }}>{h.resultado}</span>
              <span style={{ fontFamily: "monospace", fontSize: 13, color: h.cor }}>{h.pontos} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Ranking({ onNavigate }) {
  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <div style={{ display: "flex", gap: 8 }}>
          <Btn ghost onClick={() => onNavigate("perfil")}>👤 Perfil</Btn>
          <Btn ghost onClick={() => onNavigate("torneios")}>Torneios</Btn>
        </div>
      </nav>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px" }}>
        <SectionLabel>TEMPORADA 01</SectionLabel>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>Ranking Global</h1>
        <p style={{ color: "#ffffff33", fontFamily: "monospace", marginBottom: 32, fontSize: 13 }}>Top jogadores da temporada atual.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {RANKING_MOCK.map((j, i) => {
            const isMe = j.nick.includes("você");
            const medalha = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null;
            return (
              <div key={j.pos} style={{
                background: isMe ? "#00ff8710" : "#0d1117",
                border: `1px solid ${isMe ? "#00ff8744" : i < 3 ? "#ffffff11" : "#ffffff06"}`,
                borderRadius: 12, padding: "14px 20px",
                display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
              }}>
                <div style={{ minWidth: 36, textAlign: "center" }}>
                  {medalha
                    ? <span style={{ fontSize: 22 }}>{medalha}</span>
                    : <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#ffffff22" }}>#{j.pos}</span>
                  }
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: isMe ? "#00ff87" : "#fff" }}>{j.nick}</div>
                  <div style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace", marginTop: 2 }}>
                    {j.vitorias}V · {j.derrotas}D · {j.winrate}% WR
                    {j.seq > 0 && <span style={{ color: "#ffcc00", marginLeft: 8 }}>🔥 ×{j.seq}</span>}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: i < 3 ? "#00ff87" : "#ffffff66" }}>{j.pontos}</div>
                  <div style={{ fontSize: 10, color: "#ffffff22", fontFamily: "monospace" }}>PONTOS</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── SUPORTE ─────────────────────────────────────────────────────────────────

function Suporte({ onNavigate }) {
  const [msg, setMsg] = useState("");
  const [enviado, setEnviado] = useState(false);
  const faqs = [
    { p: "Como funciona o torneio?", r: "São 16 jogadores em mata-mata. Você paga R$10, entra na fila, e quando lotar o torneio começa automaticamente. O campeão leva R$100." },
    { p: "E se o adversário não aparecer?", r: "Cada jogador tem 7 minutos para iniciar a partida após o confronto ser criado. Se não aparecer, WO automático e você avança." },
    { p: "Como envio o resultado?", r: "Após a partida, tire print da tela de resultado no DLS e envie pelo site. Seu adversário confirma, e você avança automaticamente." },
    { p: "Posso pedir reembolso?", r: "Sim, mas apenas se o torneio não tiver iniciado. Depois que começa, não há reembolso. Se a fila não fechar em 10 minutos, você pode solicitar reembolso." },
    { p: "Quanto tempo dura um torneio?", r: "Aproximadamente 1 hora do início ao campeão, considerando os tempos entre rodadas." },
    { p: "O que acontece em caso de disputa?", r: "Se os dois jogadores confirmarem resultados diferentes, o caso vai para revisão manual. Nossa equipe analisa os prints e decide." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <Btn ghost onClick={() => onNavigate("torneios")}>← Voltar</Btn>
      </nav>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px" }}>
        <SectionLabel>AJUDA</SectionLabel>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>Suporte</h1>
        <p style={{ color: "#ffffff33", fontFamily: "monospace", marginBottom: 40, fontSize: 13 }}>Tem algum problema? A gente resolve.</p>

        {/* Contato direto */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <div style={{ background: "#00ff8710", border: "1px solid #00ff8733", borderRadius: 14, padding: 24, textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#00ff87", marginBottom: 4 }}>WhatsApp</div>
              <div style={{ fontSize: 12, color: "#ffffff44", fontFamily: "monospace" }}>Resposta rápida</div>
              <div style={{ marginTop: 12, background: "#00ff87", borderRadius: 6, padding: "8px 0", fontSize: 12, fontFamily: "monospace", fontWeight: 700, color: "#06080c" }}>FALAR AGORA →</div>
            </div>
          </a>
          <div style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 14, padding: 24, textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📧</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>Email</div>
            <div style={{ fontSize: 12, color: "#ffffff44", fontFamily: "monospace", marginBottom: 12 }}>freitascup7@gmail.com</div>
            <div style={{ fontSize: 11, color: "#ffffff22", fontFamily: "monospace" }}>Resposta em até 24h</div>
          </div>
        </div>

        {/* Enviar mensagem */}
        <div style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 14, padding: 24, marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>ENVIAR MENSAGEM</div>
          {enviado ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#00ff87", marginBottom: 4 }}>Mensagem enviada!</div>
              <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace" }}>Retornaremos em breve pelo WhatsApp ou email.</div>
            </div>
          ) : (
            <>
              <textarea
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="Descreva seu problema ou dúvida..."
                rows={4}
                style={{ width: "100%", background: "#0a0f1a", border: "1px solid #ffffff11", borderRadius: 8, padding: "12px 14px", color: "#fff", fontSize: 13, fontFamily: "monospace", outline: "none", resize: "vertical", marginBottom: 12, boxSizing: "border-box" }}
              />
              <Btn large onClick={() => msg.trim() && setEnviado(true)} disabled={!msg.trim()} style={{ width: "100%" }}>
                ENVIAR →
              </Btn>
            </>
          )}
        </div>

        {/* FAQ */}
        <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>PERGUNTAS FREQUENTES</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((f, i) => (
            <FaqItem key={i} pergunta={f.p} resposta={f.r} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div style={{ background: "#0d1117", border: `1px solid ${aberto ? "#00ff8733" : "#ffffff08"}`, borderRadius: 12, overflow: "hidden", transition: "all .2s" }}>
      <div onClick={() => setAberto(a => !a)} style={{ padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: aberto ? "#00ff87" : "#fff" }}>{pergunta}</span>
        <span style={{ color: "#ffffff33", fontSize: 16, transition: "transform .2s", transform: aberto ? "rotate(45deg)" : "none" }}>+</span>
      </div>
      {aberto && (
        <div style={{ padding: "0 20px 16px", fontSize: 13, color: "#ffffff55", fontFamily: "monospace", lineHeight: 1.7 }}>{resposta}</div>
      )}
    </div>
  );
}

// ─── HALL DA FAMA ─────────────────────────────────────────────────────────────

function HallFama({ onNavigate }) {
  const campeoes = [
    { torneio: "#8", nick: "ThunderKing", jogo: "Dream League Soccer", data: "Jun 2025", gols: "⚡ Gol de falta incrível" },
    { torneio: "#7", nick: "NeonWolf",    jogo: "Dream League Soccer", data: "Jun 2025", gols: "🔥 Voleio no ângulo" },
    { torneio: "#6", nick: "IronFist",    jogo: "Dream League Soccer", data: "Mai 2025", gols: "💥 Hat-trick na final" },
    { torneio: "#5", nick: "StormFC",     jogo: "Dream League Soccer", data: "Mai 2025", gols: "⚽ Gol olímpico" },
    { torneio: "#4", nick: "BlazeMaster", jogo: "Dream League Soccer", data: "Abr 2025", gols: "🎯 Golaço de meio campo" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#06080c" }}>
      <nav style={{ borderBottom: "1px solid #ffffff08", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0d1117" }}>
        <Logo />
        <Btn ghost onClick={() => onNavigate("ranking")}>← Ranking</Btn>
      </nav>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px" }}>
        <SectionLabel>HISTÓRIA</SectionLabel>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "#fff", marginBottom: 8, letterSpacing: -1 }}>
          Hall da <span style={{ color: "#00ff87" }}>Fama</span>
        </h1>
        <p style={{ color: "#ffffff33", fontFamily: "monospace", marginBottom: 40, fontSize: 13 }}>Os campeões que dominaram a arena.</p>

        {/* Top gols */}
        <div style={{ background: "linear-gradient(135deg, #00ff8715, #0d1117)", border: "1px solid #00ff8733", borderRadius: 14, padding: 24, marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: "#00ff8777", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>⚽ TOP GOLS DA TEMPORADA</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>Votação encerrada — Temporada 01</div>
          <div style={{ fontSize: 13, color: "#ffffff44", fontFamily: "monospace", lineHeight: 1.7, marginBottom: 16 }}>
            O gol campeão foi de <span style={{ color: "#00ff87" }}>ThunderKing</span> no Torneio #8.<br />
            Veja no Instagram: <span style={{ color: "#00ff87" }}>@freitascup</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["🥇 ThunderKing", "🥈 NeonWolf", "🥉 IronFist"].map((g, i) => (
              <div key={i} style={{ background: "#0d1117", border: "1px solid #ffffff0a", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontFamily: "monospace", color: "#ffffff66" }}>{g}</div>
            ))}
          </div>
        </div>

        {/* Lista de campeões */}
        <div style={{ fontSize: 11, color: "#ffffff33", fontFamily: "monospace", letterSpacing: 2, marginBottom: 16 }}>CAMPEÕES ANTERIORES</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {campeoes.map((c, i) => (
            <div key={i} style={{ background: "#0d1117", border: "1px solid #ffffff08", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: i === 0 ? "#ffd70022" : "#ffffff0a", border: `2px solid ${i === 0 ? "#ffd70044" : "#ffffff11"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                {i === 0 ? "👑" : "🏆"}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: i === 0 ? "#ffd700" : "#fff" }}>{c.nick}</span>
                  <span style={{ fontSize: 11, color: "#ffffff22", fontFamily: "monospace" }}>Torneio {c.torneio}</span>
                </div>
                <div style={{ fontSize: 12, color: "#ffffff33", fontFamily: "monospace" }}>{c.jogo} · {c.data}</div>
                <div style={{ fontSize: 12, color: "#00ff8777", fontFamily: "monospace", marginTop: 4 }}>{c.gols}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("landing");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #06080c; }
        input::placeholder { color: #ffffff22; }
        textarea::placeholder { color: #ffffff22; }
        input:focus, textarea:focus { border-color: #00ff8744 !important; }
        button:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
        button { transition: all .15s; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #00ff8733; border-radius: 2px; }
      `}</style>
      {page === "landing"   && <Landing   onNavigate={setPage} />}
      {page === "cadastro"  && <Cadastro  onNavigate={setPage} />}
      {page === "login"     && <Login     onNavigate={setPage} />}
      {page === "torneios"  && <Torneios  onNavigate={setPage} />}
      {page === "regras"    && <Regras    onNavigate={setPage} />}
      {page === "pagamento" && <Pagamento onNavigate={setPage} />}
      {page === "fila"      && <Fila      onNavigate={setPage} />}
      {page === "bracket"   && <Bracket   onNavigate={setPage} />}
      {page === "partida"   && <Partida   onNavigate={setPage} />}
      {page === "admin"     && <Admin     onNavigate={setPage} />}
      {page === "perfil"    && <Perfil    onNavigate={setPage} />}
      {page === "ranking"   && <Ranking   onNavigate={setPage} />}
      {page === "suporte"   && <Suporte   onNavigate={setPage} />}
      {page === "hallfama"  && <HallFama  onNavigate={setPage} />}
    </>
  );
}
