# Micro-Frontend
This is a POC for MicroFrontend architecture.

**Angular Micro Frontend** is an architectural pattern. 
It breaks the large Angular web application into small, independent, and deployable micro-applications.
Every micro-application has responsibilities for handling its own set of features. 
It groups together web applications from different technologies and multiple domains in a single domain as a single web application.
The tech stack and the deployment server may be different. 
The goal of Micro Front Frontend Architecture is to provide scalable, flexible, and maintainable web applications thus reducing the complexity and adding modularity.


Business users wish to consolidate a huge assortment of services and deliver everything in one place. 
This results in an increase in the application size due to the addition of numerous functionalities, modules, and pages
Increased application size can be challenging for multiple teams of developers to work on a project. 
Because more than one team would be required to work on a single, module, page, or functionality.
With the help of micro-frontend, multiple developers can work on individual micro applications.


Web pack module federation
To implement micro-frontends we will have to use Webpack's ModuleFederationPlugin.
The ModuleFederationPlugin allows to share or consume modules with other independent builds at runtime.
Ultimately we can compile our micro-frontend applications into separate builds and load them as per need at runtime.

**ModuleFederationPlugin** has an approach called “Module Federation” for referencing program parts that are not yet known at compile time.
These are separately compiled micro-frontends. 
The individual program parts can share libraries with each other so that the individual bundles do not contain any duplicates.

Concept of Module Federation
**Local modules / Host** are normal modules that are part of the current build.
**Remote modules** are modules that are not part of the current build and are loaded from a so-called container at the runtime.

Loading remote modules is an asynchronous activity.

![image](https://github.com/sborhade/microfrontend/assets/19749006/eae09d88-907d-4299-a6c4-18fa743d3d7d)










