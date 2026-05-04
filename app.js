/* ── RESET & BASE ─────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:        #f8fafc;
  --bg2:       #f1f5f9;
  --white:     #ffffff;
  --border:    #e2e8f0;
  --border2:   #cbd5e1;
  --text:      #0f172a;
  --text2:     #475569;
  --text3:     #94a3b8;
  --blue:      #185FA5;
  --blue-light:#E6F1FB;
  --blue-dark: #0C447C;
  --green:     #3B6D11;
  --green-bg:  #EAF3DE;
  --amber:     #854F0B;
  --amber-bg:  #FAEEDA;
  --red:       #A32D2D;
  --red-bg:    #FCEBEB;
  --radius:    8px;
  --radius-lg: 12px;
  --shadow:    0 1px 3px rgba(0,0,0,.08);
}

body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); font-size: 14px; line-height: 1.5; }

/* ── LOGIN ────────────────────────────────────── */
.login-screen {
  display: flex; align-items: center; justify-content: center;
  min-height: 100vh; background: var(--bg);
}
.login-box {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 40px 36px; width: 380px;
  box-shadow: var(--shadow);
}
.login-logo { text-align: center; margin-bottom: 28px; }
.logo-icon {
  width: 48px; height: 48px; background: var(--blue); color: #fff;
  border-radius: 12px; display: inline-flex; align-items: center;
  justify-content: center; font-size: 22px; font-weight: 700; margin-bottom: 12px;
}
.login-logo h1 { font-size: 20px; font-weight: 600; }
.login-logo p  { font-size: 13px; color: var(--text2); margin-top: 4px; }
.login-footer  { text-align: center; margin-top: 16px; font-size: 13px; color: var(--text2); }
.login-footer a { color: var(--blue); text-decoration: none; }
.error-msg { background: var(--red-bg); color: var(--red); font-size: 13px; padding: 8px 12px; border-radius: var(--radius); margin-bottom: 12px; }

/* ── APP LAYOUT ───────────────────────────────── */
#app { display: flex; height: 100vh; overflow: hidden; }

/* ── SIDEBAR ──────────────────────────────────── */
.sidebar {
  width: 224px; flex-shrink: 0; background: var(--white);
  border-right: 1px solid var(--border); display: flex;
  flex-direction: column; height: 100vh;
}
.sidebar-logo {
  display: flex; align-items: center; gap: 10px;
  padding: 18px 16px; border-bottom: 1px solid var(--border);
}
.logo-icon-sm {
  width: 32px; height: 32px; background: var(--blue); color: #fff;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 700; flex-shrink: 0;
}
.sidebar-title { font-size: 14px; font-weight: 600; }
.sidebar-sub   { font-size: 11px; color: var(--text3); }
.nav           { flex: 1; padding: 10px 8px; overflow-y: auto; }
.nav-item {
  display: flex; align-items: center; gap: 9px; padding: 8px 10px;
  border-radius: var(--radius); cursor: pointer; font-size: 13px;
  color: var(--text2); margin-bottom: 2px; transition: all .12s;
  border: 1px solid transparent;
}
.nav-item:hover  { background: var(--bg); color: var(--text); }
.nav-item.active { background: var(--blue-light); color: var(--blue); font-weight: 500; border-color: #c5dcf5; }
.sidebar-user {
  display: flex; align-items: center; gap: 9px;
  padding: 12px 14px; border-top: 1px solid var(--border);
}
.user-avatar {
  width: 32px; height: 32px; border-radius: 50%; background: var(--blue-light);
  color: var(--blue); display: flex; align-items: center; justify-content: center;
  font-weight: 600; font-size: 13px; flex-shrink: 0;
}
.user-info { flex: 1; min-width: 0; font-size: 12px; font-weight: 500; overflow: hidden; }
.btn-logout {
  background: none; border: none; cursor: pointer; color: var(--text3);
  padding: 4px; border-radius: 6px; display: flex; align-items: center;
}
.btn-logout:hover { color: var(--red); background: var(--red-bg); }

/* ── MAIN ─────────────────────────────────────── */
.main   { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.topbar {
  background: var(--white); border-bottom: 1px solid var(--border);
  padding: 14px 20px; display: flex; align-items: center; justify-content: space-between;
  flex-shrink: 0;
}
.topbar h2 { font-size: 16px; font-weight: 600; }
.topbar-actions { display: flex; gap: 8px; align-items: center; }
.content { flex: 1; overflow-y: auto; padding: 20px; }

/* ── FORMS ────────────────────────────────────── */
.form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
.form-group label { font-size: 12px; font-weight: 500; color: var(--text2); }
input[type=text], input[type=email], input[type=password], input[type=number],
input[type=date], input[type=tel], select, textarea {
  width: 100%; padding: 8px 11px; border: 1px solid var(--border2);
  border-radius: var(--radius); font-size: 13px; font-family: inherit;
  background: var(--white); color: var(--text); transition: border .12s;
}
input:focus, select:focus, textarea:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px rgba(24,95,165,.1); }
textarea { resize: vertical; min-height: 70px; }
.search-input { width: 220px; padding: 7px 11px; border: 1px solid var(--border); border-radius: var(--radius); font-size: 13px; font-family: inherit; background: var(--bg); color: var(--text); }
.search-input:focus { outline: none; border-color: var(--blue); background: var(--white); }

/* ── BUTTONS ──────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: var(--radius); font-size: 13px;
  font-family: inherit; font-weight: 500; cursor: pointer;
  border: 1px solid var(--border2); background: var(--white);
  color: var(--text); transition: all .12s;
}
.btn:hover      { background: var(--bg2); }
.btn-primary    { background: var(--blue); color: #fff; border-color: var(--blue); }
.btn-primary:hover { background: var(--blue-dark); border-color: var(--blue-dark); }
.btn-full       { width: 100%; justify-content: center; padding: 10px; margin-top: 4px; }
.btn-danger     { color: var(--red); border-color: #fca5a5; background: var(--red-bg); }
.btn-danger:hover { background: #fee2e2; }
.btn-sm         { padding: 4px 9px; font-size: 12px; }

/* ── CARDS ────────────────────────────────────── */
.card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 18px; margin-bottom: 16px;
}
.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.card-title  { font-size: 14px; font-weight: 600; }

/* ── STATS GRID ───────────────────────────────── */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; }
.stat-card  { background: var(--bg2); border-radius: var(--radius-lg); padding: 16px; }
.stat-label { font-size: 11px; color: var(--text3); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 6px; }
.stat-value { font-size: 28px; font-weight: 600; line-height: 1; }
.stat-sub   { font-size: 11px; color: var(--text3); margin-top: 4px; }

/* ── TABLE ────────────────────────────────────── */
.table-wrap  { overflow-x: auto; }
table        { width: 100%; border-collapse: collapse; font-size: 13px; }
th           { text-align: left; padding: 8px 12px; color: var(--text3); font-weight: 500; font-size: 11px; text-transform: uppercase; letter-spacing: .4px; border-bottom: 1px solid var(--border); white-space: nowrap; }
td           { padding: 10px 12px; border-bottom: 1px solid var(--border); color: var(--text); vertical-align: middle; }
tr:last-child td { border-bottom: none; }
tbody tr:hover td { background: var(--bg); }
.td-actions  { display: flex; gap: 6px; }

/* ── BADGES ───────────────────────────────────── */
.badge       { display: inline-block; padding: 2px 9px; border-radius: 20px; font-size: 11px; font-weight: 500; white-space: nowrap; }
.badge-green { background: var(--green-bg); color: var(--green); }
.badge-amber { background: var(--amber-bg); color: var(--amber); }
.badge-red   { background: var(--red-bg); color: var(--red); }
.badge-blue  { background: var(--blue-light); color: var(--blue-dark); }
.badge-gray  { background: var(--bg2); color: var(--text2); }

/* ── AVATAR ───────────────────────────────────── */
.avatar {
  width: 28px; height: 28px; border-radius: 50%; background: var(--blue-light);
  color: var(--blue); display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600; flex-shrink: 0;
}
.flex-cell   { display: flex; align-items: center; gap: 8px; }

/* ── CHIPS / TABS ─────────────────────────────── */
.chip-row  { display: flex; gap: 6px; margin-bottom: 14px; flex-wrap: wrap; }
.chip      { padding: 5px 13px; border-radius: 20px; font-size: 12px; font-weight: 500; cursor: pointer; border: 1px solid var(--border2); background: var(--white); color: var(--text2); transition: all .12s; }
.chip:hover{ background: var(--bg2); }
.chip.active { background: var(--blue-light); color: var(--blue); border-color: #c5dcf5; }

/* ── MODAL ────────────────────────────────────── */
.modal-overlay {
  display: none; position: fixed; inset: 0; background: rgba(15,23,42,.4);
  z-index: 1000; align-items: center; justify-content: center; padding: 20px;
}
.modal {
  background: var(--white); border-radius: var(--radius-lg);
  width: 580px; max-width: 100%; max-height: 90vh;
  display: flex; flex-direction: column; box-shadow: 0 8px 32px rgba(0,0,0,.15);
}
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; border-bottom: 1px solid var(--border); }
.modal-header h3 { font-size: 15px; font-weight: 600; }
.modal-close { background: none; border: none; cursor: pointer; color: var(--text3); font-size: 18px; line-height: 1; padding: 2px 4px; border-radius: 4px; }
.modal-close:hover { background: var(--bg2); color: var(--text); }
.modal-body   { padding: 20px; overflow-y: auto; flex: 1; }
.modal-footer { padding: 14px 20px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; gap: 8px; }

/* ── FORM GRID ────────────────────────────────── */
.form-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }
.form-col-full { grid-column: 1 / -1; }
.form-section  { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; color: var(--text3); margin: 16px 0 10px; padding-bottom: 6px; border-bottom: 1px solid var(--border); grid-column: 1 / -1; }

/* ── ALERT BANNER ─────────────────────────────── */
.alert { padding: 12px 16px; border-radius: var(--radius); font-size: 13px; margin-bottom: 14px; }
.alert-amber { background: var(--amber-bg); color: var(--amber); border: 1px solid #f5d69a; }
.alert-red   { background: var(--red-bg);   color: var(--red);   border: 1px solid #f5a5a5; }
.alert-blue  { background: var(--blue-light); color: var(--blue-dark); border: 1px solid #c5dcf5; }

/* ── EMPTY STATE ──────────────────────────────── */
.empty-state { text-align: center; padding: 48px 20px; color: var(--text3); }
.empty-state svg { margin-bottom: 12px; opacity: .4; }
.empty-state p { font-size: 14px; }

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 768px) {
  .sidebar    { width: 56px; }
  .sidebar-title, .sidebar-sub, .nav-item span, .user-info { display: none; }
  .nav-item   { justify-content: center; padding: 10px; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .form-grid  { grid-template-columns: 1fr; }
  .modal      { width: 100%; margin: 0; border-radius: var(--radius-lg) var(--radius-lg) 0 0; max-height: 95vh; }
  .modal-overlay { align-items: flex-end; padding: 0; }
}
