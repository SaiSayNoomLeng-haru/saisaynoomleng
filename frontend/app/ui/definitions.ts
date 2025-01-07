// nav links
export type navLinks = {
    name: string
    url: string
}

// courses
export type courses = {
    type: string
    key: string
    value: string
}

// certificates
export type certificates = {
    title: string
    awardedDate: string
    id: number
    documentId: string
    provider: string
    type: string
    skillGained: string
    imgUrl: imageUrl
}

export type imageUrl = {
    formats: {
        large: imageFormat
        small: imageFormat
        medium: imageFormat
        thumbnail: imageFormat
    }
}

export type imageFormat = {
    width: number
    height: number
    url: string
}

// portfolios
export type Portfolios = {
    name: string
    type: string
    languageUsed: string[]
    url: string
    imageUrl: imageUrl
}
