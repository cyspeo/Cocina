# Template de User Story avec Tâches Angular

---

## 1. User Story

**En tant que** [rôle],  
**Je veux** [fonctionnalité],  
**Afin de** [bénéfice].

**Exemple :**  
**En tant qu'** utilisateur,  
**Je veux** pouvoir m'inscrire via un formulaire de création de compte,  
**Afin de** pouvoir accéder à mon tableau de bord personnel.

---

## 2. Critères d'acceptation

- Le formulaire d'inscription doit avoir des champs pour le nom, l'email et le mot de passe.
- Si l'email est déjà utilisé, un message d'erreur doit s'afficher.
- Un message de confirmation doit être affiché après une inscription réussie.
- L'utilisateur doit être redirigé vers la page du tableau de bord après une inscription réussie.

---

## 3. Tâches (Angular)

### A. Vue (UI / Composant)

- **Tâche 1 : Créer le formulaire d'inscription (formulaire reactif)**  
  - Créer un composant `RegisterFormComponent`.
  - Ajouter un formulaire réactif avec validation (nom, email, mot de passe).
  - Afficher des messages d'erreur de validation sous chaque champ.

- **Tâche 2 : Ajouter les messages d'erreur**  
  - Implémenter un affichage conditionnel pour les erreurs de validation (email déjà utilisé, etc.).

- **Tâche 3 : Créer la vue d'inscription (RegisterView)**  
  - Créer un composant `RegisterViewComponent` qui contiendra le formulaire d'inscription.
  - Ajouter une route `/register` pour accéder à cette vue.

### B. Service

- **Tâche 4 : Créer le service d'authentification (AuthService)**  
  - Créer un service `AuthService` dans `features/auth/services`.
  - Ajouter une méthode `register()` qui communique avec Firebase pour créer un nouvel utilisateur.
  - Gérer les erreurs liées à la création d'utilisateur (ex : email déjà utilisé).

### C. Repository

- **Tâche 5 : Créer le repository d'authentification (AuthRepository)**  
  - Créer un repository `AuthRepository` dans `data/repositories` pour gérer l'état de l'utilisateur connecté.
  - Ajouter un `BehaviorSubject` pour suivre l'état de l'utilisateur (connecté ou non).
  - Ajouter une méthode `register()` qui interagit avec `AuthService` et met à jour l'état de l'utilisateur.

### D. Tests

- **Tâche 6 : Ajouter les tests unitaires pour AuthService**  
  - Tester la méthode `register()` pour vérifier la logique d'enregistrement de l'utilisateur et les erreurs.

- **Tâche 7 : Ajouter les tests unitaires pour AuthRepository**  
  - Tester l'interaction entre `AuthRepository` et `AuthService`, et vérifier que l'état de l'utilisateur est bien mis à jour.

### E. Navigation et Redirection

- **Tâche 8 : Implémenter la redirection après inscription réussie**  
  - Dans `AuthService`, après un enregistrement réussi, rediriger l'utilisateur vers la page du tableau de bord (par exemple, via `Router.navigate(['/dashboard'])`).

---

## 4. Remarques

- Assurez-vous que la logique de validation soit bien prise en compte côté client (Angular) avant l'appel à Firebase.
- N'oubliez pas d'ajouter un **loading spinner** ou un indicateur pour l'attente lors de la création du compte.

---

## 5. Liens et Références

- [Documentation Firebase Auth](https://firebase.google.com/docs/auth)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)

