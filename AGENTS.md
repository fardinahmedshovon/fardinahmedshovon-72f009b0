# Architecture rules
- Serve the fixed founder vCard from public/downloads with its portrait embedded, so contact downloads work without an async generation step.
- Keep secondary contact interactions in ContactActions using the shared Button component, so the portfolio page stays focused on presentation.
- Mount a single Sonner notification host in App for clipboard feedback.