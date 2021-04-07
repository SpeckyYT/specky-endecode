type Options = {
    characters: String
    whitespaces: String
    log: Boolean
}

declare function endecode(input: String, options: Options):String
export = endecode
