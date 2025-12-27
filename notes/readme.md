each file in the notes directory is for internal use, they are not meant to be documentation as much as they're meant to be notes

---

# Devlog

## 12/25/25

realized that using each webhook as its own seperate individual hook is a bad idea

instead, use redux (like how fluidd and mainsail use VUEX)

made little graph
deleted docs

### 3:15 pm est

im gonna try the discord command handling thing

what i mean by that is when i made discord bots i had a command handler, each file in a directory would have its own command and stuff

```
commands/
├── a
├── b
├── c
└── admin/
    ├── x
    ├── y
    └── z
```

(made with https://tree.nathanfriend.com/)

im unsure how this will effect redux's preformance (because of the need to get each file in the thing, each file is its own module)
