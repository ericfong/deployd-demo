# Question

Assume this project:

 - require deployd which is an open-source framework (https://github.com/deployd/deployd)
 - I am patching deployd from time to time

So,

```
"dependencies": {
  "deployd": "ericfong/deployd#jobdoh",
}
```

# Why care?

 - In order to make the project run, I keep adding features into ericfong/deployd#jobdoh
 - Then, I want to create Pull Request from jobdoh back to https://github.com/deployd/deployd
 - After PR back and forth, finally landed to the main branch


But merge new master back to jobdoh will generates a lot of conflicts. As PR are rebased (for cleaner commit logs) when committed to master.

Same thing happen for some internal modules that shared between projects.


# How to solve it?

  - Always use new branch (other then master) for one new feature?
  - Wait until the PR landed to master and whole cycle complete

Before whole cycle complete, don't develop new features.

<- A bit limiting.
