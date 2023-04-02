//Note
export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string,
  markdown: string,
  tagIds: string[]
}


export type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[]
}

export type Tag = {
  id: string,
  label: string
}

//NoteForm Props
export type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & Partial<NoteData>

//NewNote Page Props
export type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

//EditNote Page Props
export type EditNoteProps = {
  onSubmit: (id:string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

//NoteList Props 
export type NoteListProps = {
  availableTags: Tag[]
  notes:Note[]
  updateTag:(id: string, label: string) => void
  deleteTag:(id: string) => void
}

//NoteCard Props
export type SimplyfiedNotes = {
  tags: Tag[]
  title: string
  id: string
}

//NoteLayout Props 
export type NoteLayoutProps = {
  notes:Note[]
}

//Individual note page props
export type NoteProps = {
  onDelete:(id: string) => void
}

//EditTagsModal Props
export type EditTagsModalProps = {
  show:boolean
  availableTags:Tag[]
  handleClose: () => void
  updateTag:(id: string, label: string) => void
  deleteTag:(id: string) => void
}