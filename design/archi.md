# Structure d’un projet Angular avec Firebase et RxJS

---

## 1. Introduction

Ce document décrit la structure d’un projet Angular moderne utilisant **Firebase** (authentification et base de données) et **RxJS** pour la gestion d’état, **sans utiliser NgRx**.  
Il sert de **guide pour une IA** générant automatiquement du code à partir de spécifications : user stories, tâches Angular (vue, composant, service...).

---

## 2. Structure Globale du Projet

Le projet est structuré de manière **modulaire**, **claire** et **scalable** :

src/ 
├── app/ 
│ 
├── core/ → services globaux (guards, interceptors...) 
│ 
├── shared/ → composants réutilisables, pipes, directives 
│ 
├── data/ → modèles, services Firebase, repositories │ 
│ 
├── models/ → interfaces TypeScript (User, Task, etc.) 
│ 
│ 
├── services/ → appels bruts à Firebase (auth, firestore...) 
│ 
│ 
└── repositories/ → logique applicative avec BehaviorSubject 
│ 
├── features/ 
│ 
│ ├── auth/ → module de login/register 
│ │ │ ├── components/ → composants UI (login-form, register-form) │ │ │ ├── views/ → vues routables (LoginView, RegisterView) │ │ │ └── services/ → logique métier propre à auth │ │ ├── dashboard/ → autres features similaires │ └── app-routing.module.ts → routes principales │ └── app.module.ts → module racine ├── environments/ → config Firebase └── index.html / main.ts → point d'entrée Angular

---

## 3. Rôles des Composants

- **Views** : Composants routables (via Angular Router), conteneurs principaux.
- **Components** : UI réutilisables dans une vue ou entre features.
- **Services (dans features)** : Logique métier d’une feature (AuthService, TaskService...).
- **Firebase Services** : Encapsulent les appels directs à Firebase (ex: `auth.signIn`, `firestore.getDoc`).
- **Repositories** : Contiennent la logique d’orchestration + gestion d’état avec `BehaviorSubject`.

---

## 4. Accès aux Données et Auth

- `FirebaseService` gère la connexion à Firebase et encapsule les appels CRUD ou auth.
- `AuthRepository` expose l’utilisateur courant sous forme d’Observable (`user$`) et synchronise l’état local.
- Toutes les features suivent ce modèle : repository (état + logique), service (métier), composant (vue).

---

## 5. Exemple de Flow : Auth

Prenons le cas d’une feature Auth :

1. `AuthRepository` expose `user$`, observable du user courant.
2. `LoginView` appelle `AuthService.login()` via formulaire.
3. `AuthService` appelle `AuthRepository.login()`.
4. `AuthRepository` utilise `FirebaseService` (`signInWithEmailAndPassword`).
5. Si succès, `BehaviorSubject` est mis à jour → tous les composants abonnés à `user$` réagissent.

🔁 Ce pattern est **réutilisable pour toutes les features** : tâches, projets, fichiers, etc.

---

## 6. Avantages de l’approche

- **Pas besoin de NgRx** : RxJS + services = suffisant, plus simple à maintenir.
- **Modulaire** : chaque feature a ses propres composants, vues, services.
- **Scalable** : structure claire, testable, adaptée à une grosse base de code.
- **Idéal pour les IA génératives** : chaque tâche Angular peut se référer au rôle attendu :
  - Ajouter une vue = créer un composant `View` dans `features/x/views`
  - Ajouter un service = créer dans `features/x/services`
  - Ajouter une logique de données = repository dans `data/repositories`
