<!--  -->

HOME Page ka navbar alag hai

```
import Navbar from "@/components/home1/Navbar";
```

and inner pages ka navbar alag hai

```
import Navbar from "@/components/innerpage/Navbar";
```

Ongoing:- 
Balaji Sapphire
Balaji Vista
Balaji Park
Balaji Skyline

Upcoming:-
Airoli New Landmark


.tc-navbar-style1 {

  width: 100%;
  z-index: 99;
  background-color: transparent;
  padding: 0;
}

.home-style1 .section-padding-x {
    padding-right: 4vw;
    padding-left: 4vw;
}
=====================================================
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model Blog {
  id         String   @id @default(cuid())
  title      String
  slug       String   @unique
  content    String   @db.Text
  coverImage String?
  category   String?
  published  Boolean  @default(false)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}