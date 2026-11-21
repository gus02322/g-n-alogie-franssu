"""Assemble index.html à partir des sources.

Usage : python3 build.py
"""
import json
from pathlib import Path

root = Path(__file__).parent
data = json.loads((root / "data/famille.json").read_text(encoding="utf-8"))
core = (root / "src/core.js").read_text(encoding="utf-8").replace(
    "/*DATA*/", json.dumps(data, ensure_ascii=False, separators=(",", ":"))
)
fiche = (root / "src/fiche.js").read_text(encoding="utf-8")
app = (root / "src/app.html").read_text(encoding="utf-8")
out = app.replace("/*CORE*/", core).replace("/*FIC*/", fiche)
(root / "index.html").write_text(out, encoding="utf-8")
print(f"index.html généré ({len(out) // 1024} Ko, {len(data)} personnes du tableau familial)")
