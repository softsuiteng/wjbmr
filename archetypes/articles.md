---
title: "{{ replace .Name "-" " " | title }}"
date: 2022-04-15T10:00:00+01:00
draft: true

section: "Articles"
categories: ["Journal Article"]

authors: []
keywords: []

outputs: 
- html
- amp

doi:
volume: 9
issue: 1

publishing:
  position: 1
  pages: "0-10"
  month: "April"
  year: 2022

file: "wjbmr_09_01_00.pdf" # volume_issue_position
image: "wjbmr_09_01_00.jpg" # volume_issue_position

social:
  card: "summary"
  site: "@wjbmr"
  creator: "@wjbmr"
  title: "{{ replace .Name "-" " " | title }}"
  description: "World Journal of Biomedical Research"
  image:
---