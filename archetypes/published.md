---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

outputs: 
- html
- amp

volume: 0
issue: 0

# preliminary: "wjbmr_01_02.pdf" 

social:
  card: "summary"
  site: "@wjbmr"
  creator: "@wjbmr"
  title: "World Journal of Biomedical Research"
  description: "{{ replace .Name "-" " " | title }}"
  image: "{{ .Name }}.jpg"
---

