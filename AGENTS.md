Superpowers Efficiency Rules

These instructions explicitly override any conflicting Superpowers workflow requirements.

Primary Goal

Prioritize fast, practical, high-quality implementation.

Use Superpowers as a lightweight engineering aid, not as a mandatory long-form process.

Do not spend significant effort on planning, documentation, repeated reviews, or process ceremony unless they materially improve the result.

1. Default to Execution

When the user's request is clear and reasonably scoped:

Start working immediately.
Do not require a separate brainstorming phase.
Do not require design approval before implementation.
Do not require a written specification before implementation.
Do not require an implementation plan before making changes.
Do not create planning documents solely to satisfy a Superpowers workflow.

Use planning only when it genuinely reduces implementation risk.

2. When Brainstorming Is Actually Needed

Use brainstorming only when one or more of these are true:

requirements are materially ambiguous;
several substantially different architectures are possible;
the change affects major system architecture;
the user explicitly asks to explore options;
incorrect assumptions would cause substantial rework.

For normal UI changes, styling changes, bug fixes, component creation, page creation, refactoring, or straightforward features:

skip the full brainstorming workflow.

If brainstorming is useful, keep it concise.

Maximum:

1 short requirements summary;
2–3 options;
1 recommended approach.

Do not create a design document unless requested.

3. Minimize Clarifying Questions

Do not ask questions unless the missing information blocks meaningful progress.

When reasonable assumptions can be made:

state the assumption briefly;
proceed with implementation.

Ask at most one blocking question at a time.

Do not stop implementation for minor preferences that can easily be changed later.

4. Keep Plans Short

When a plan is useful, keep it to approximately 3–7 concrete steps.

Avoid:

long implementation plans;
task decomposition into trivial subtasks;
repeating requirements in multiple formats;
extensive design documents;
verbose reasoning about obvious implementation choices.

Prefer:

inspect → implement → test → verify

5. Avoid Skill Chaining

Do not invoke multiple Superpowers skills simply because they exist.

Use only the minimum number of skills necessary for the task.

For example, a straightforward feature should NOT automatically require:

brainstorming → writing-plans → test-driven-development → subagent-development → code-review → verification

Instead, use the smallest workflow that provides meaningful value.

6. Efficient Repository Inspection

Inspect only the files relevant to the current task.

Prefer targeted search such as:

filename search;
grep / ripgrep;
imports;
references;
directly related components.

Do not scan or read the entire repository unless necessary.

Do not repeatedly re-read unchanged files.

Once the relevant architecture is understood, start implementation.

7. Documentation Rules

Do not create:

design specs;
architecture documents;
planning documents;
decision records;
progress reports;

unless:

the user explicitly asks for them; or
the architectural change is significant enough that future maintainers genuinely need them.

Never create documentation solely because a Superpowers skill normally requires it.

8. Testing Strategy

Use proportional testing.

For small/local changes:

run the most relevant targeted test, lint, type check, or build check.

For broad/shared changes:

run broader tests when appropriate.

Do not repeatedly run the full test suite after every small edit.

Perform one meaningful final verification pass before declaring completion.

If a test fails:

investigate the actual failure;
fix it;
rerun the relevant test.

Avoid unrelated cleanup.

9. Code Review

Do not automatically run separate code-review workflows for every change.

Use additional review when:

the change is complex;
security is involved;
important data could be affected;
architecture changed significantly;
the user explicitly requests review.

For normal changes, perform a concise self-review during final verification.

10. Git Behavior

Do not create commits, branches, worktrees, or pull requests solely because a Superpowers workflow suggests doing so.

Only perform Git operations when:

requested by the user;
required by the current environment;
necessary for safe execution of a complex change.

Do not create commits for planning documents unless explicitly requested.

11. UI / Frontend Tasks

For frontend development, prioritize visible progress.

Preferred workflow:

inspect the existing design system and relevant components;
implement the requested UI;
run the application;
fix obvious layout/runtime issues;
verify responsive behavior when relevant.

Do not require a formal design specification for ordinary visual iteration.

Preserve existing styles and architecture unless the user requests a redesign.

12. Portfolio Project Specific Rule

For this portfolio project, optimize for rapid visual iteration.

When asked to:

change layout;
adjust typography;
modify spacing;
add a section;
create a project page;
improve responsiveness;
add subtle animation;
replace placeholder content;

implement the change directly unless there is a genuinely blocking ambiguity.

Do not restart the site's design process every time a visual change is requested.

13. Scope Discipline

Do not refactor unrelated code.

Do not add infrastructure for hypothetical future needs.

Do not introduce abstractions until they are useful.

Prefer the simplest maintainable implementation that satisfies the current requirement.

Follow YAGNI.

14. Stop When Done

Once the requested behavior works and relevant verification passes:

stop.

Do not continue with optional refactors, polish, documentation, additional features, or architectural improvements unless requested.

15. Communication Style

Keep progress updates concise.

Report primarily:

what was changed;
important decisions or assumptions;
verification performed;
remaining issues, if any.

Do not provide lengthy descriptions of internal process.

Decision Rule

Before using a Superpowers workflow, ask:

Will this step materially improve correctness, reduce risk, or prevent meaningful rework?

If the answer is no, skip it.

Default workflow:

Understand → Implement → Verify → Finish

not:

Brainstorm → Spec → Approval → Plan → Approval → Implement → Review → Re-review → Document → Finish