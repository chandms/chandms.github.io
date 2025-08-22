---
permalink: /swe/
title: " 🏢 Software Engineering Experience"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

> <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta Logo" width="100"/>  
>  
> **Role:** Systems and Infra SWE PhD Intern  
> **Location:** Seattle, WA, USA  
> **Duration:** Summer 2025  
> **Team:** Data Flows (under **Privacy Org**) 
> ### 🔹 Work Highlights:
>
> **Problem:** Probes, a runtime analysis tool at Meta can detect if data from a source asset reaches a sink asset, but it does not explain why or how the data flows between them. To determine the cause, human reviewers must manually inspect hundreds of execution evidences per source–sink pair. Each evidence contains detailed read and write stack traces with long chains of function calls, making this process time-consuming and error-prone. Reviewing a single stack trace evidence manually by an expert can take ~20 minutes.
>
> **Contributions:**
>
> - Designed and implemented an AI agent that analyzes stack traces and function definitions to identify declassification or data flows between source–sink pairs in under 2 minutes per evidence.
> - Built an iterative reasoning process where the agent processes stack trace chunks step-by-step—first along the read path, then along the write path.
> - Enabled the agent to:
>   - Pinpoint the exact code location of declassification, or
>   - Provide justification (with supporting code) when the data flow is preserved.
>   - Explicitly handle class-level variables storing source data.
> - Evaluated performance against static analysis results and admin-approved ground truth:
>   - ~70% precision/recall at the individual evidence level.
>   - ~94% accuracy for identifying declassification at the source–sink pair level.
>   - ~78% accuracy for detecting complete source-to-sink data flows.
> - Integrated the agent into the UI with a direct link to its full reasoning output.
> - Developed monitoring alerts for performance and cost measurement.
> - Developed Unit Tests to ensure new changes in the agent does not cause impact the main functionalities.
> - Collaborated with cross-functional teams to extend their multi-agent AI framework for this use case.
> - Designed and implemented a lineage graph visualization using a fast graph traversal API, and contributed new features back to the traversal API.
> - Tech stack - HACK, Python, React, SQL.
> - Experiemented with models: LLAMA, CLAUDE, GEMINI.
> - Tools - Mercurial (VCS)

---

> <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta Logo" width="100"/>  
>  
> **Role:** Software Engineering Internship  
> **Location:** NYC, NY, USA  
> **Duration:** Summer 2022  
> **Team:** Privacy Approval Monitor (under **Messenger org.**) 
> ### 🔹 Work Highlights:
>
> - **Goal:** To ensure no Messenger feature accesses tables containing sensitive data. To be able to visualize data flow from the Messenger feature to sensitive tables before production release.
> - Developed a UI tool that detects sensitive database access in code blocks, leveraged by software team leads before code production release.
> - Developed another UI tool to show data flows within various privacy assets across Meta (e.g., data flow from mailbox API to stored procedure to database).
> - Worked with cross functional teams to upload target dataset in Meta's lineage system.
> - Tech stack - React, GraphQL, HACK, PostgreSQL, Python, Dataswarm pipeline.
> - Tools - Mercurial (VCS)

---

> <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg" alt="HSBC Logo" width="100"/>  
>  
> **Role:** Software Enginer  
> **Location:** Pune, Maharashtra, India  
> **Duration:** July 2019 - August 2021   
> **Team:** Global Credit Module (GCM) (under **Wealth and Personal Banking (WPB)**)
> ### 🔹 Work Highlights:
>
> - Worked as a full-stack developer on a product that is primarily used by relationship managers.
> - Developed features such as automatic email notifications for credit limit approvals and rejections, SMS alerts for credit margin status, Jasper reports, rule assignments for securities received from batch process etc.
> - Monitored production batch.
> - Performed code management during production release.
> - Tech stack - Java, DB2, Sprint Batch
> - Tools - GitHub (VCS), JIRA (Task management in Agile SDLC), Jenkins (Deployment), G3 (Deployment)
