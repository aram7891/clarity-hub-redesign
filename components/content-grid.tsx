'use client'

import { HubCard } from './hub-card'
import { useLanguage } from '@/lib/language-context'

const icons = {
  protocol: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  essays: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  ),
  book: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  workbook: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
}

export function ContentGrid() {
  const { t, language } = useLanguage()

  const contentItems = [
    {
      id: 'protocol',
      title: t.content.protocol.title,
      category: t.content.protocol.category,
      description: t.content.protocol.description,
      meta: t.content.protocol.meta,
      featured: true,
      icon: icons.protocol,
    },
    {
      id: 'essays',
      title: t.content.essays.title,
      category: t.content.essays.category,
      description: t.content.essays.description,
      meta: t.content.essays.meta,
      icon: icons.essays,
    },
    {
      id: 'books-es',
      title: t.content.booksEs.title,
      category: t.content.booksEs.category,
      description: t.content.booksEs.description,
      meta: t.content.booksEs.meta,
      icon: icons.heart,
    },
    {
      id: 'books-en',
      title: t.content.booksEn.title,
      category: t.content.booksEn.category,
      description: t.content.booksEn.description,
      meta: t.content.booksEn.meta,
      icon: icons.book,
    },
    {
      id: 'workbook-es',
      title: t.content.workbookEs.title,
      category: t.content.workbookEs.category,
      description: t.content.workbookEs.description,
      meta: t.content.workbookEs.meta,
      icon: icons.workbook,
    },
    {
      id: 'workbook-en',
      title: t.content.workbookEn.title,
      category: t.content.workbookEn.category,
      description: t.content.workbookEn.description,
      meta: t.content.workbookEn.meta,
      icon: icons.workbook,
    },
  ]

  return (
    <section id="hub" className="relative px-6 py-24 md:py-32">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4 block opacity-0 animate-fade-in stagger-1">
          {t.grid.sectionLabel}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-tight opacity-0 animate-fade-in stagger-2 text-balance">
          {t.grid.sectionTitle}
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {contentItems.map((item, index) => (
            <HubCard
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              meta={item.meta}
              icon={item.icon}
              featured={item.featured}
              href={`#${item.id}`}
              className={`opacity-0 animate-fade-in stagger-${Math.min(index + 1, 8)}`}
            />
          ))}
        </div>
      </div>

      {/* Essays List Section */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-24">
        <div className="border border-border/30 rounded-2xl p-8 md:p-12 bg-card/30">
          <div className="flex items-center gap-3 mb-8">
            {icons.essays}
            <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              {t.content.essayList.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.content.essayList.items.map((essay, index) => (
              <a
                key={index}
                href="#"
                className="group flex items-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-border/20 hover:border-accent/30 transition-all duration-300"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {index + 1}
                </span>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {essay}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
